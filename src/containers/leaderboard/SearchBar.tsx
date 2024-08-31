import { Input } from "@/components/ui/input";
import React from "react";

function SearchBar() {
  return (
    <div className="mx-8 -mt-4">
      <Input
        type="text"
        placeholder="Search"
        className="bg-white text-black rounded-full items-center "
      />
    </div>
  );
}

export default SearchBar;
