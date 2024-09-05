"use client";
import React from "react";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Register from "@/containers/home/Register";
import useUserCupcakesData from "@/hooks/useUserCupcakesData";
import Claim from "@/containers/home/Claim";

const Navbar = () => {
  const pathname = usePathname();
  const { userData } = useUserCupcakesData();
  // Check if the current path is /leaderboard
  const isLeaderboardPage = pathname === "/leaderboard";

  return (
    <nav className="mx-4 my-4">
      {isLeaderboardPage ? (
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/back.svg" // Ensure you have a back button icon in your public folder
              alt="Back"
              width={24}
              height={24}
            />
          </Link>
        </div>
      ) : (
        <div className="flex items-center">
          <div className="flex items-center gap-1">
            <Image src="/logo.svg" alt="Cupcake" width={34} height={34} />
            {/* <h1 className="ml-2 font-candal">CUPCAKE</h1> */}
          </div>

          <div className="ml-auto flex items-center gap-2">
            <Link href="/leaderboard">
              <Image
                src="/leaderboard.svg"
                alt="Leaderboard"
                width={32}
                height={28}
              />
            </Link>
            {userData?.registered ? <Claim /> : <Register />}
            <ConnectButton accountStatus={"avatar"} chainStatus={"icon"} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
