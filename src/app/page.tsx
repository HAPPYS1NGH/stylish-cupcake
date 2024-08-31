"use client";

import {
  useUtils,
  usePopup,
  useMainButton,
  useViewport,
} from "@telegram-apps/sdk-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  const utils = useUtils();
  const popUp = usePopup();
  const mainBtn = useMainButton();
  const viewport = useViewport();

  const handlePopUp = async () => {
    const response = await popUp.open({
      title: " Rabble",
      message: "Link will lead to website",
      buttons: [
        { id: "link", type: "default", text: "Open rabble.pro" },
        { type: "cancel" },
      ],
    });
    if (response === "link") {
      utils.openLink("https://rabble.pro");
    }
  };

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

  const handleViewport = async () => {
    if (!viewport?.isExpanded) {
      viewport?.expand();
    }
  };
  return (
    <main className="my-4 mx-2 p-4 border-x-[10px] border-b-[10px] border-t-[15px] border-border rounded-[35px] gap-6 flex flex-col text-center">
      <div className="my-2">
        <h1 className=" text-xl font-sans font-bold mb-\\ ">Send Cupcake</h1>
        <p className="text-xs">Paste a wallet address to send a cupcake</p>
      </div>
      <div>
        <p className="text-xs mb-2">Send Wallet Address</p>
        <Input
          placeholder="0x3FD256b7DaBfE3693EeA1..."
          className="bg-fill text-white text-bold rounded-full  border-t-[1px] border-b-[4px] border-x-4 border-light-blue"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="w-4/5 bg-fill p-2 border-4  border-light-blue rounded-3xl flex justify-center  items-center gap-4">
          <Image src="/cupcake.svg" alt="Cupcake" width={34} height={34} />x
          <p className="text-2xl">3</p>
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
          <p className="text-xs text-black mb-2">Cupcakes Received</p>
          <div className="flex justify-between bg-fill text-white text-bold rounded-full text-left px-4 py-2">
            <p className="text-2xl">33</p>
            <Image src="/dropdown.svg" alt="Dropdown" width={36} height={24} />
          </div>
        </div>
      </div>
    </main>
  );
}
