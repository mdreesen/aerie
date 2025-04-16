import { formatAmount } from "@/lib/formatters";
import Image from "next/image";
import Link from "next/link";

export default function BankCard({ account, userName, showBalance = true }: CreditCardProps) {
    return (
        <div className="flex flex-col">
            <Link href="/" className="relative bg-blue-500 flex h-[190px] w-[320px] max-w-[320px] justify-between rounded-[20px] border border-white bg-bank-gradient shadow-creditCard backdrop-blur-[6px] bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 shadow-lg">
                <div className="relative z-10 flex size-full max-w-[228px] flex-col justify-between rounded-l-[20px] bg-gray-700 bg-bank-gradient px-5 pb-4 pt-5">
                    <div>
                        <h1 className="text-16 font-semibold text-white">
                            {account.name || userName}
                        </h1>
                        <p className="font-ibm-plex-serif font-black text-white">
                            {showBalance && formatAmount(account.currentBalance)}
                        </p>
                    </div>

                    <article className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <h1 className="text-12 font-semibold text-white">{userName}</h1>
                            <h2 className="text-12 font-semibold text-white">** / **</h2>

                        </div>
                        <p className="text-14 font-semibold tracking-[1.1px] text-white"> **** **** **** <span className="text-16">{account.mask || 1234}</span></p>
                    </article>
                </div>

                <div className="p-4 flex flex-col h-full justify-between">
                    <Image
                        alt="Pay pass"
                        src="/assets/bankCard/payPass.png"
                        height={24}
                        width={20}
                    />

                    <Image
                        alt="Pay pass"
                        src="/assets/bankCard/masterCard.png"
                        height={24}
                        width={20}
                    />
                </div>
            </Link>
        </div>
    )
}