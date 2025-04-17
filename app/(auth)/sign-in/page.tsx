import AuthForm from "@/components/ui/AuthForm";
import Image from "next/image";

export default function Page() {
    return (
        <div className="flex min-h-[100vh] flex-1">
            <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">

                    <AuthForm type="sign-in" />

                </div>
            </div>
            <div className="relative hidden w-0 flex-1 lg:block">
                <Image
                    alt="Pay pass"
                    src="/assets/auth.png"
                    height={1000}
                    width={1000}
                    className="absolute inset-0 size-full object-cover"
                />
            </div>
        </div>
    )
}
