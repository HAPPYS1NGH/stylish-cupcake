"use client";
import React, { useEffect, useState } from "react";
import { useUtils, useMainButton } from "@telegram-apps/sdk-react";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { Link2Icon } from "@radix-ui/react-icons";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { vendingMachineAbi } from "@/constants/abi";
import { vendingMachineAddress } from "@/constants";
import useTelegramProfile from "@/hooks/useProfile";

function Register() {
  const { data: hash, isPending, writeContract } = useWriteContract();
  const { userProfile } = useTelegramProfile();

  const mainBtn = useMainButton();
  const utils = useUtils();
  const {
    isLoading: isConfirming,
    error,
    isSuccess: isConfirmed,
  } = useWaitForTransactionReceipt({
    hash,
  });

  const handleClick = () => {
    mainBtn.enable();
    mainBtn.setParams({
      bgColor: "##F27389",
      text: "Register",
      isVisible: true,
    });
    mainBtn.show();
  };

  useEffect(() => {
    if (!mainBtn) return;
    const registerUser = () => {
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
  }, [mainBtn, userProfile]);

  const handleClose = () => {
    mainBtn.disable();
    mainBtn.hide();
  };

  return (
    <div>
      <Drawer onClose={handleClose}>
        <DrawerTrigger onClick={handleClick} className="  ">
          <Button className="bg-[#89C0F2] text-2xl font-bold text-[#366188] border-b-8 border-[#446079] rounded-xl p-8 active:translate-y-1 active:border-b-4 hover:bg-[#89C0F2]/90">
            Send
          </Button>
        </DrawerTrigger>
        <DrawerContent className="bg-white text-black">
          <DrawerHeader>
            <DrawerTitle className="text-3xl p-2 text-left">
              Register yourself
            </DrawerTitle>
          </DrawerHeader>
          <div className="w-full text-left px-6 text-navy">
            <div className="">
              <div className="text-black tracking-tighter flex flex-col gap-2 text-sm">
                <p>Register yourself to receive cupcakes from your friends.</p>
              </div>
            </div>

            {error && <p className="text-red text-sm">{error.name}</p>}
            {isConfirmed && (
              <>
                <Button
                  variant={"view"}
                  size={"view"}
                  onClick={() => {
                    utils.openLink(`https://sepolia.arbitrum.io/tx/${hash}`);
                  }}
                  className=" text-white text-sm flex gap-2 mt-2"
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
