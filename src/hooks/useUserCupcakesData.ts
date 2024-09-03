import { useReadContract } from "wagmi";
import { vendingMachineAbi } from "@/constants/abi";
import { vendingMachineAddress } from "@/constants";
import useTelegramUserProfile from "@/hooks/useProfile";
import { UserData } from "@/types";

// Custom hook to fetch user data from Ethereum
export const useUserCupcakesData = () => {
    const { userProfile } = useTelegramUserProfile();

    // Reading data from the contract
    const {
        data: userData,
        status,
        isLoading,
        error,
    } = useReadContract({
        abi: vendingMachineAbi,
        address: vendingMachineAddress,
        functionName: "getUserData",
        args: [userProfile?.username || ""], // Handle cases where userProfile might be null
    });

    console.log("//////////////////////");
    console.log("useUserCupcakesData hook");
    console.log("userData,|||| status, isLoading, error");
    console.log(userData, "||||", status, isLoading, error);
    console.log("//////////////////////");

    return { userData, status, isLoading, error };
};

export default useUserCupcakesData;
