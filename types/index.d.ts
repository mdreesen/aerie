declare interface User {
    $id: string,
    email: string,
    userId: string,
    dwollaCustomerUrl: string,
    dwollaCustomerId: string,
    firstName: string,
    lastName: string,
    address1: string,
    city: string,
    state: string,
    postalCode: string,
    dateOfBirth: string,
    ssn: string
}

declare interface HeaderBoxProps {
    type?: "title" | "greeting",
    title: string;
    subtext: string;
    user?: string;
}

declare interface TotalBalanceBoxProps {
    accounts?: [],
    totalBanks?: number;
    totalCurrentBalance: number;
}

declare interface SidebarProps {
    user: User;
}

declare interface DoughnutChartProps {
    accounts: Array;
}