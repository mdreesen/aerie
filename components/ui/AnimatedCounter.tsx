'use client';
import CountUp from "react-countup";

export default function AnimatedCounter({ amount }: { amount: number }) {
    return (
        <div className="h-10">
            <CountUp
                decimals={2}
                decimal=","
                prefix="$"
                end={amount}
            />
        </div>
    );
}