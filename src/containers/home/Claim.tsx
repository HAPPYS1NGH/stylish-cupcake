"use client";
import * as React from "react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { toast } from "sonner";
import { vendingMachineAbi } from "@/constants/abi";
import { vendingMachineAddress } from "@/constants";

export default function Claim() {
  const { data: hash, isPending, writeContract } = useWriteContract();

  const handleClaim = () => {
    writeContract({
      address: vendingMachineAddress,
      abi: vendingMachineAbi,
      functionName: "claimDailyCupcakes",
    });
  };

  const {
    isLoading: isConfirming,
    error,
    isSuccess: isConfirmed,
  } = useWaitForTransactionReceipt({
    hash,
  });

  useEffect(() => {
    if (isConfirmed) {
      toast.success("Cupcakes claimed successfully!");
    }
    if (error) {
      toast.error("Failed to claim cupcakes");
    }
  }, [isConfirmed, error]);

  return (
    <div className="flex items-center justify-center">
      <Button
        disabled={isPending || isConfirming}
        onClick={handleClaim}
        variant={"secondary"}
        className="rounded-full"
      >
        {isPending ? "Claiming..." : "Claim Cupcakes"}
      </Button>
    </div>
  );
}
