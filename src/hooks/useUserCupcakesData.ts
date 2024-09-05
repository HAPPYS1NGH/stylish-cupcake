import { useReadContract } from "wagmi";
import { vendingMachineAbi } from "@/constants/abi";
import { vendingMachineAddress } from "@/constants";
import useTelegramUserProfile from "@/hooks/useProfile";
import { UserData } from "@/types";
import { formatNumber } from "@/utils/format";

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

    const rawData = data as any;
    let userData: UserData = {
        balance: 0,
        received: 0,
        registered: false,
    };
    console.log(rawData);

    // Safeguard against undefined properties in rawData
    if (!isLoading && !error && rawData) {

        userData = {
            balance: parseInt(rawData[0].toString()),
            received: parseInt(rawData[1].toString()),
            registered: rawData[2], // Use nullish coalescing to provide default
        };
    }

    // console.log("userData,|||| status, isLoading, error");
    // console.log(userData, "||||", status, isLoading, error);
    // console.log("//////////////////////");

    return { userData, status, isLoading, error };
};

export default useUserCupcakesData;
