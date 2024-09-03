export interface UserData {
    balance: bigint;     // The balance of cupcakes as a uint256
    received: bigint;    // The total cupcakes received as a uint256
    registered: boolean; // Whether the user is registered
}

export interface User {
    addedToAttachmentMenu?: boolean;
    allowsWriteToPm?: boolean;
    firstName: string;
    id: number;
    isBot?: boolean;
    isPremium?: boolean;
    lastName?: string;
    languageCode?: string;
    photoUrl?: string;
    username?: string;
}