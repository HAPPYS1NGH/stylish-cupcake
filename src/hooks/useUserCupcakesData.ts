import { useReadContract } from "wagmi";
import { vendingMachineAbi } from "@/constants/abi";
import { vendingMachineAddress } from "@/constants";
import useTelegramUserProfile from "@/hooks/useProfile";
import { UserData } from "@/types";
import { formatNumber } from "@/utils/format";

interface RawUserData {
    balance: bigint;
    received: bigint;
    registered: boolean;
}

// Custom hook to fetch user data from Ethereum
export const useUserCupcakesData = () => {
    const { userProfile } = useTelegramUserProfile();

    // Reading data from the contract
    const {
        data,
        status,
        isLoading,
        error,
    } = useReadContract({
        abi: vendingMachineAbi,
        address: vendingMachineAddress,
        functionName: "getUserData",
        args: [userProfile?.username || ""], // Handle cases where userProfile might be null
    });

    // If loading or data is unavailable, return default values
    if (isLoading || !data) {
        return {
            userData: { balance: 0, received: 0, registered: false },
            status,
            isLoading,
            error,
        };
    }

    const rawData = data as RawUserData;

    // Safeguard against undefined properties in rawData
    const userData: UserData = {
        balance: rawData?.balance ? parseInt(rawData.balance.toString()) : 0,
        received: rawData?.received ? parseInt(rawData.received.toString()) : 0,
        registered: rawData?.registered ?? false, // Use nullish coalescing to provide default
    };

    console.log("//////////////////////");
    console.log("useUserCupcakesData hook");
    console.log("userData,|||| status, isLoading, error");
    console.log(userData, "||||", status, isLoading, error);
    console.log("//////////////////////");

    return { userData, status, isLoading, error };
};

export default useUserCupcakesData;
