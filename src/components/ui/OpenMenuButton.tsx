"use client";

import { IoMenu } from "react-icons/io5";
import { FullMenu } from "./FullMenu";
import { useUIStore } from "@/store/ui/ui-store";
// import { Press_Start_2P } from "next/font/google";

// const pressStart2P = Press_Start_2P({
//   subsets: ["latin"],
//   weight: "400",
// });

export const OpenMenuButton = () => {
  const isFullMenuOpen = useUIStore((state) => state.isFullMenuOpen);
  const openFullMenu = useUIStore((state) => state.openFullMenu);

  return (
    <div className="flex items-center">
      <div
        className="fixed left-5 top-5 bg-gray-900 rounded  border-white p-5 cursor-pointer"
        onClick={openFullMenu}
      >
        <IoMenu />
      </div>
      {/* <h1
        className={`${pressStart2P.className} text-yellow-400 ml-20 border font-bold 
        stroke-black stroke-2 size-20`}
      >
        PokeAPI
      </h1> */}
      {isFullMenuOpen && <FullMenu />}
    </div>
  );
};
