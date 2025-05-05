import Link from "next/link";
import BankCard from "./BankCard";

export default function RightSideBar({ user, transactions, banks }: RightSidebarProps) {
    console.log(banks)
    return (
        <div className="mt-10">
            <section className="pb-4">
                <div className="flex justify-center items-center gap-4">
                    <h2 className="text-pretty text-xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-xl">My Banks</h2>

                    <Link href="/" className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span>Add Bank</span>
                    </Link>

                </div>
            </section>

            <section>
                {/* {transactions} */}

                {banks?.length > 0 && (
                    <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
                        <div className="relative z-10">
                            <BankCard
                                key={banks[0].$id}
                                account={banks[0]}
                                userName={`${user.firstName} ${user.lastName}`}
                                showBalance={false}
                            />
                        </div>
                        {banks[1] && (
                            <div className="absolute right-0 top-8 z-0 w-[90%]">
                                <BankCard
                                    key={banks[1].$id}
                                    account={banks[1]}
                                    userName={`${user.firstName} ${user.lastName}`}
                                    showBalance={false}
                                />
                            </div>
                        )}
                    </div>
                )}
            </section>
        </div>
    );
}