"use client";

import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FullMenu } from "./FullMenu";

export const OpenMenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(()=> {
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }
    toggleMenu()
  },[])

  return (
    <div>

    <div className="fixed left-5 top-5 bg-gray-900 rounded  border-white p-5 cursor-pointer"
    onClick={openMenu}>
      <IoMenu />
    </div>
    {
      isMenuOpen && (
        <FullMenu/>
      )
    }
      </div>
  );
};
