"use client";
import React, { useEffect } from "react";
import { useUtils, useMainButton } from "@telegram-apps/sdk-react";
import {
  useWaitForTransactionReceipt,
  useWriteContract,
  useAccount,
} from "wagmi";
import { Link2Icon } from "@radix-ui/react-icons";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { vendingMachineAbi } from "@/constants/abi";
import { vendingMachineAddress } from "@/constants";
import useTelegramProfile from "@/hooks/useProfile";
import useUserCupcakesData from "@/hooks/useUserCupcakesData";

function Register() {
  const { isConnected } = useAccount();
  const { userProfile } = useTelegramProfile();
  const { userData } = useUserCupcakesData();

  const mainBtn = useMainButton();
  const utils = useUtils();

  const { data: hash, isPending, writeContract } = useWriteContract();
  const {
    isLoading: isConfirming,
    error,
    isSuccess: isConfirmed,
  } = useWaitForTransactionReceipt({ hash });

  useEffect(() => {
    if (isConnected && !userData.registered) {
      mainBtn.setParams({
        bgColor: "#F27389",
        text: "Register",
        isVisible: true,
      });
      mainBtn.enable();
      mainBtn.show();
    } else {
      mainBtn.disable();
      mainBtn.hide();
    }
  }, [isConnected, userData.registered]);

  useEffect(() => {
    if (!isConnected || userData.registered) return;

    const registerUser = () => {
      mainBtn.showLoader();
      console.log("Registering user");
      console.log(userProfile?.username);
      writeContract({
        address: vendingMachineAddress,
        abi: vendingMachineAbi,
        functionName: "registerUser",
        args: [userProfile?.username],
      });
    };

    mainBtn.on("click", registerUser);
    return () => {
      mainBtn.off("click", registerUser);
    };
  }, [mainBtn, userProfile, isConnected]);

  useEffect(() => {
    if (isPending || isConfirming) {
      console.log(isConfirming, isPending, hash);

      mainBtn.showLoader();
    } else {
      mainBtn.hideLoader();
    }
  }, [isPending, isConfirming]);

  const handleClose = () => {
    mainBtn.disable();
    mainBtn.hide();
  };

  return (
    <div>
      <Drawer open={!userData.registered && isConnected} onClose={handleClose}>
        <DrawerContent className="bg-white text-black">
          <DrawerHeader>
            <DrawerTitle className="text-3xl p-2 text-left">
              Register yourself
            </DrawerTitle>
          </DrawerHeader>
          <div className="w-full text-left px-6 text-navy">
            <p className="text-black tracking-tighter flex flex-col gap-2 text-sm">
              Register yourself to receive cupcakes from your friends.
            </p>

            {error && <p className="text-red text-sm">{error.message}</p>}
            {isConfirmed && (
              <>
                <Button
                  variant={"view"}
                  size={"view"}
                  onClick={() => {
                    utils.openLink(`https://sepolia.arbitrum.io/tx/${hash}`);
                  }}
                  className="text-white text-sm flex gap-2 mt-2"
                >
                  View Transaction
                  <Link2Icon />
                </Button>
                <Button
                  onClick={() => {
                    utils.shareURL(
                      "https://t.me/CupcakeVendingMachineBot",
                      "I am hungry. Send me some cupcakes!"
                    );
                  }}
                >
                  Tell your friends to send you some cupcakes.
                </Button>
              </>
            )}
          </div>
          <DrawerFooter />
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Register;
