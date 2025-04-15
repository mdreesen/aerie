import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './charts/DoughnutChart';

export default function TotalBalanceBox({ accounts = [], totalBanks, totalCurrentBalance }: TotalBalanceBoxProps) {
    return (
        <section className='rounded border text-center flex p-4'>
            <div className='w-[40%]'>
                {/* Donut Chart Here */}
                <DoughnutChart accounts={accounts} />
            </div>

            <div className='flex flex-col gap-4'>
                <h2 className='mt-2 text-pretty text-xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-xl'>
                    Bank accounts: {totalBanks}
                </h2>
                <div>
                    <p>Total current balance</p>
                    <AnimatedCounter amount={totalCurrentBalance} />
                    {/* <p>{formatAmount(totalCurrentBalance as number)}</p> */}
                </div>
            </div>

        </section>
    );
}