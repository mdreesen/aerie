import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import RightSideBar from '@/components/ui/RightSideBar';
import { getLoggedInUser } from '@/actions/user.actions';
import { getAccounts, getAccount } from '@/actions/bank.actions';
import RecentTransactions from '@/components/ui/RecentTransactions';

export default async function Page({ searchParams }: { searchParams: Promise<{ [key: string]: string | string | undefined }> }) {
    const params = await searchParams;
    const page = params?.page;
    console.log('page', page)

    const currentPage = Number(page as string) || 1;
    const loggedIn = await getLoggedInUser();
    const accounts = await getAccounts({ userId: loggedIn.$id });

    if (!accounts) return;
    const accountsData = accounts?.data;

    const appwriteItemId = (params.id as string || accountsData[0]?.appwriteItemId);
    const account = await getAccount({ appwriteItemId });

    console.log({
        accountsData,
        account,
        appwriteItemId: appwriteItemId
    })

    return (
        <div className="bg-white">
            <main>
                {/* Hero section */}
                <div>
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-10">
                        <HeaderBox
                            type="greeting"
                            title="Welcome"
                            user={loggedIn?.firstName || 'Guest'}
                            subtext="Access and manage your account and transactions efficiently"
                        />
                    </div>

                    <TotalBalanceBox
                        accounts={accountsData}
                        totalBanks={accounts?.totalBanks}
                        totalCurrentBalance={accounts?.totalCurrentBalance}
                    />

                    <div>
                        <RightSideBar
                            user={loggedIn}
                            transactions={[accounts?.transactions]}
                            banks={accountsData?.slice(0, 2)}
                        />
                    </div>

                    <div>
                        <RecentTransactions
                            accounts={accountsData}
                            transactions={account?.transactions}
                            appwriteItemId={appwriteItemId}
                            page={currentPage}
                        />
                    </div>
                </div>

                {/* Feature section */}
                {/* <div className="mt-32 sm:mt-56">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl sm:text-center">
                            <h2 className="text-base/7 font-semibold text-indigo-600">Everything you need</h2>
                            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-5xl">
                                No server? No problem.
                            </p>
                            <p className="mt-6 text-lg/8 text-gray-600">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                                iste dolor cupiditate blanditiis.
                            </p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden pt-16">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div aria-hidden="true" className="relative">
                                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                        <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-indigo-600" />
                                        {feature.name}
                                    </dt>{' '}
                                    <dd className="inline">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div> */}
            </main>
        </div>
    )
}
