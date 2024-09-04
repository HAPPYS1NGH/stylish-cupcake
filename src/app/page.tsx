"use client";

import { useUtils, useMainButton } from "@telegram-apps/sdk-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUserCupcakesData } from "@/hooks/useUserCupcakesData";
import { Loader } from "@/components/shared/Loader";

import Image from "next/image";

export default function Home() {
  const utils = useUtils();
  const mainBtn = useMainButton();
  const { userData, isLoading } = useUserCupcakesData();

  const handleShare = async () => {
    utils.shareURL(
      "https://t.me/+rFqLyk4_W-diZDZl",
      "Join! Mini Apps Hackathon group!"
    );
  };
  const handleMainBtn = async () => {
    mainBtn.enable();
    mainBtn.setText("New Text");
    mainBtn.setBgColor("#08F7AF");
    if (mainBtn.isVisible) {
      mainBtn.hide();
    } else {
      mainBtn.show();
    }
  };

  mainBtn.on("click", () => {
    mainBtn.showLoader();
    mainBtn.setText("Action Performing");
    setTimeout(() => {
      console.log("Main Button Clicked");
      mainBtn.hideLoader();
      mainBtn.setText("New Text");
      mainBtn.hide();
    }, 2000);
  });

  return (
    <main className="my-4 mx-2 p-4 border-x-[10px] border-b-[10px] border-t-[15px] border-border rounded-[35px] gap-6 flex flex-col text-center">
      <div className="my-2">
        <h1 className=" text-xl font-sans font-bold mb-\\ ">Send Cupcake</h1>
        <p className="text-xs">Paste a Telegram ID to send a cupcake</p>
      </div>
      <div>
        <p className="text-xs mb-2">Send Telegram ID</p>
        <Input
          placeholder="ethharpreet     (No @)"
          className="bg-fill text-white text-bold rounded-full  border-t-[1px] border-b-[4px] border-x-4 border-light-blue"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="w-4/5 bg-fill p-2 border-4  border-light-blue rounded-3xl flex justify-center items-center gap-4">
          <Image src="/cupcake.svg" alt="Cupcake" width={34} height={34} />x
          <Input
            type="number"
            placeholder="3"
            className="bg-fill text-white text-bold w-20 text-2xl text-center rounded-full border-none"
          />
        </div>
        <Image src="/receipt.svg" alt="Receipt" width={41} height={45} />
      </div>
      <div className="flex items-center justify-between">
        <div className="w-full bg-[#0269C8] p-2 border-4  border-light-blue rounded-3xl flex flex-col justify-center items-center gap-4">
          <div className="flex  justify-center items-center gap-4">
            <Image
              src="/cupcake-vending.svg"
              alt="Vending Cupcake"
              width={34}
              height={34}
            />{" "}
            <Image
              src="/cupcake-vending.svg"
              alt="Vending Cupcake"
              width={34}
              height={34}
            />{" "}
            <Image
              src="/cupcake-vending.svg"
              alt="Vending Cupcake"
              width={34}
              height={34}
            />{" "}
            <Image
              src="/cupcake-vending.svg"
              alt="Vending Cupcake"
              width={34}
              height={34}
            />{" "}
            <Image
              src="/cupcake-vending.svg"
              alt="Vending Cupcake"
              width={34}
              height={34}
            />
          </div>
          <div className="flex  justify-center items-center gap-4">
            <Image
              src="/cupcake-vending.svg"
              alt="Vending Cupcake"
              width={34}
              height={34}
            />{" "}
            <Image
              src="/cupcake-vending.svg"
              alt="Vending Cupcake"
              width={34}
              height={34}
            />{" "}
            <Image
              src="/cupcake-vending.svg"
              alt="Vending Cupcake"
              width={34}
              height={34}
            />{" "}
            <Image
              src="/cupcake-vending.svg"
              alt="Vending Cupcake"
              width={34}
              height={34}
            />{" "}
            <Image
              src="/cupcake-vending.svg"
              alt="Vending Cupcake"
              width={34}
              height={34}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-around">
        <div>
          <Button className="bg-[#89C0F2] text-2xl font-bold text-[#366188] border-b-8 border-[#446079] rounded-xl p-8 active:translate-y-1 active:border-b-4 hover:bg-[#89C0F2]/90">
            Send
          </Button>
        </div>
        <div>
          <p className="text-xs text-black mb-2">Cupcakes Balance</p>
          <div className="flex justify-between bg-fill text-white text-bold rounded-full text-left px-4 py-2">
            {isLoading ? (
              <Loader className="text-white text-2xl" />
            ) : (
              <p className="text-2xl">{userData.balance}</p>
            )}
            <Image src="/dropdown.svg" alt="Dropdown" width={36} height={24} />
          </div>
        </div>
      </div>
    </main>
  );
}
