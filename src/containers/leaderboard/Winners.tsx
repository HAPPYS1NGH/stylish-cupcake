import React from "react";
import Image from "next/image";

function Winners() {
  return (
    <div className="bg-blue rounded-b-2xl pb-10">
      <h1 className="text-center text-xl font-bold ">Leaderboard</h1>
      <div className="flex justify-center items-center gap-10 mt-2">
        {/* Left Item */}
        <div className="flex flex-col gap-2 items-center">
          <p className="text-sm">2</p>
          <Image
            src="/sample.png"
            alt="Sample"
            width={50}
            height={50}
            className="rounded-full border-4 border-light-blue"
          />
          <p className="font-bold text-sm">5300</p>
          <p className="text-xs">Ankit</p>
        </div>

        {/* Middle Item (Higher than others) */}
        <div className="flex flex-col gap-2 items-center -mt-6">
          <Image
            src="/crown.svg"
            alt="Crown"
            width={27.53}
            height={13.25}
            className="-mb-4 z-10"
          />
          <Image
            src="/sample.png"
            alt="Sample"
            width={50}
            height={50}
            className="rounded-full border-4 border-light-blue"
          />
          <p className="font-bold text-sm">6400</p>
          <p className="text-xs">John</p>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <p className="text-sm">3</p>

          <Image
            src="/sample.png"
            alt="Sample"
            width={50}
            height={50}
            className="rounded-full border-4 border-light-blue"
          />
          <p className="font-bold text-sm">5200</p>
          <p className="text-xs">Emily</p>
        </div>
      </div>
    </div>
  );
}

export default Winners;
