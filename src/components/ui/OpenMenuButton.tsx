"use client";

import { IoMenu } from "react-icons/io5";
import { FullMenu } from "./FullMenu";
import { useUIStore } from "@/store/ui/ui-store";

export const OpenMenuButton = () => {
  const isFullMenuOpen = useUIStore((state) => state.isFullMenuOpen);
  const openFullMenu = useUIStore((state) => state.openFullMenu);

  return (
    <div>
      <div
        className="fixed left-5 top-5 bg-gray-900 rounded  border-white p-5 cursor-pointer"
        onClick={openFullMenu}
      >
        <IoMenu />
      </div>
      {isFullMenuOpen && <FullMenu />}
    </div>
  );
};
