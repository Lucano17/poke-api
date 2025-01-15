"use client";

import { useState } from "react";
import { IoMenu } from "react-icons/io5";

export const OpenMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed left-5 top-5 bg-gray-900 rounded border-white p-5">
      <IoMenu />
    </div>
  );
};
