"use client";
import React, { useEffect } from "react";
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

function Confirm({
  recipientTelegramID,
  amount,
}: {
  recipientTelegramID: string;
  amount: number;
}) {
  const { data: hash, isPending, writeContract } = useWriteContract();

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
      text: "Send Cupcakes",
      isVisible: true,
    });
    mainBtn.show();
  };

  useEffect(() => {
    const sendCupcakes = () => {
      mainBtn.showLoader();
      writeContract({
        address: vendingMachineAddress,
        abi: vendingMachineAbi,
        functionName: "sendCupcakes",
        args: [recipientTelegramID, BigInt(amount)],
      });
    };

    mainBtn.on("click", sendCupcakes);
    return () => {
      mainBtn.off("click", sendCupcakes);
    };
  }, [mainBtn, recipientTelegramID, amount]);

  useEffect(() => {
    if (isPending || isConfirming) {
      mainBtn.showLoader();
    } else {
      mainBtn.hideLoader();
    }
    if (isConfirmed) {
      mainBtn.disable();
      mainBtn.hide();
    }
  }, [isPending, isConfirming]);

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
              Send the Cupcakes
            </DrawerTitle>
          </DrawerHeader>
          <div className="w-full text-left px-6 text-navy">
            <p className="text-black tracking-tighter flex flex-col gap-2 text-sm">
              You are sending {amount} cupcakes to @{recipientTelegramID}
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
                  className="text-white text-sm flex gap-2 my-2"
                >
                  View Transaction
                  <Link2Icon />
                </Button>
                <Button
                  onClick={() => {
                    utils.shareURL(
                      "https://t.me/CupcakeVendingMachineBot",
                      "I just sent you some cupcakes!"
                    );
                  }}
                >
                  Tell your friends you sent them some cupcakes
                </Button>
              </>
            )}
          </div>
          <DrawerFooter>
            <Button onClick={handleClose} className="">
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Confirm;
