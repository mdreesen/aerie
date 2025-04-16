import AuthForm from "@/components/ui/AuthForm"

export default function Page() {
    return (
        <div className="flex min-h-full flex-1">
            <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">

                    <AuthForm type="sign-in" />

                </div>
            </div>
        </div>
    )
}
