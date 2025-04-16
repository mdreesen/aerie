'use client';
import { useState } from "react";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"
import CustomInput from "./CustomInput";
import { Loader2 } from 'lucide-react';
import { Form } from "@/components/ui/form"
import { authFormSchema } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, signUp } from "@/actions/user.actions";

export default function AuthForm({ type }: { type: string }) {
    const router = useRouter();
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);

    const formSchema = authFormSchema(type);

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            address1: "",
            state: "",
            postalCode: "",
            ssn: "",
            dateOfBirth: "",

            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setLoading(true)
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        try {
            // Signup with appwrite & create plaid token
            if (type === 'sign-up') {
                const newUser = await signUp(values);
                setUser(newUser)
            }

            if (type === 'sign-in') {
                const response = await signIn({
                    email: values.email,
                    password: values.password
                });

                if (response) router.push("/");
            }
        } catch { }
        console.log(values);
        setLoading(false)
    }

    return (
        <div className="mt-10">
            <div>
                <div>
                    <h1 className="mt-10 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-5xl">
                        {user ? 'Link Account' : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
                    </h1>
                    <p className="text-16 font-normal mb-8">{user ? 'Link your account to get started' : 'Please enter your details'}</p>

                    <div>
                        {user ? (
                            <div className="flex flex-col gap-4">
                                {/* Plaid Link */}
                            </div>
                        ) : (
                            <>
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                                        {type === 'sign-up' && (
                                            <>
                                                <div className="flex gap-4">
                                                    <CustomInput
                                                        control={form.control}
                                                        name="firstName"
                                                        label="First Name"
                                                        placeholder="Enter your first name"
                                                    />

                                                    <CustomInput
                                                        control={form.control}
                                                        name="lastName"
                                                        label="Last Name"
                                                        placeholder="Enter your last name"
                                                    />
                                                </div>


                                                <CustomInput
                                                    control={form.control}
                                                    name="address1"
                                                    label="Address"
                                                    placeholder="Enter your address"
                                                />

                                                <CustomInput
                                                    control={form.control}
                                                    name="city"
                                                    label="City"
                                                    placeholder="Enter your city"
                                                />

                                                <div className="flex gap-4">
                                                    <CustomInput
                                                        control={form.control}
                                                        name="state"
                                                        label="State"
                                                        placeholder="ex: NY"
                                                    />

                                                    <CustomInput
                                                        control={form.control}
                                                        name="postalCode"
                                                        label="Postal Code"
                                                        placeholder="ex: 11101"
                                                    />
                                                </div>

                                                <div className="flex gap-4">
                                                    <CustomInput
                                                        control={form.control}
                                                        name="ssn"
                                                        label="SSN"
                                                        placeholder="ex: 1234"
                                                    />

                                                    <CustomInput
                                                        control={form.control}
                                                        name="dateOfBirth"
                                                        label="Date of Birth"
                                                        placeholder="YYYY-MM-DD"
                                                    />
                                                </div>
                                            </>
                                        )}

                                        <CustomInput
                                            control={form.control}
                                            name="email"
                                            label="Email"
                                            placeholder="Enter your email"
                                        />

                                        <CustomInput
                                            control={form.control}
                                            name="password"
                                            label="Password"
                                            placeholder="Enter your password"
                                        />

                                        <Button type="submit" className="bg-blue-500 w-full">
                                            {loading ?
                                                <>
                                                    <Loader2
                                                        size={20}
                                                        className="animate-spin"
                                                    /> &nbsp;
                                                    Loading...
                                                </> : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
                                        </Button>
                                    </form>
                                </Form>
                            </>
                        )}
                    </div>

                    <section className="flex gap-1 justify-center mt-4">
                        <p className="text-center text-sm/6 text-gray-500">
                            {type === 'sign-in' ? "Don't have an account?" : "Already have an account?"}
                        </p>
                        <Link className="text-center text-sm/6 text-blue-500 font-semibold" href={type === 'sign-in' ? '/sign-up' : '/sign-in'}>
                            {type === 'sign-in' ? "Sign Up" : "Sign In"}
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    );
}