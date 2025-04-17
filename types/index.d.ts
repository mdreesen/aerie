declare interface User {
    $id: string,
    email: string,
    userId: string,
    dwollaCustomerUrl: string,
    dwollaCustomerId: string,
    name: string,
    firstName: string,
    lastName: string,
    address1: string,
    city: string,
    state: string,
    postalCode: string,
    dateOfBirth: string,
    ssn: string
};

declare interface SignUpParams {
    email: string,
    password: string,
    firstName?: string,
    lastName?: string,
    address1?: string,
    city?: string,
    state?: string,
    postalCode?: string,
    dateOfBirth?: string,
    ssn?: string
};

declare interface SignInProps {
    email: string,
    password: string,
};

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

declare interface RightSideBarProps {
    user: any,
    transactions?: Array;
    banks: Array;
}

declare interface CreditCardProps {
    account?: Array,
    userName?: String;
    showBalance?: Boolean;
}

declare interface DoughnutChartProps {
    accounts: Array;
}