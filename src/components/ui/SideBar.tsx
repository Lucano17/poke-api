"use client";

import { IoCalculator, IoHeartOutline } from "react-icons/io5";
import { RiNextjsLine } from "react-icons/ri";
import { MdCatchingPokemon } from "react-icons/md";
import { SideBarMenuItem } from "./SideBarMenuItem";
import Link from "next/link";
import { useEffect, useState } from "react";

const menuItems = [
  {
    path: "/main",
    icon: (
      <MdCatchingPokemon size={40} style={{ transform: "rotate(180deg)" }} />
    ),
    title: "Pokémons",
    subTitle: "Todos los pokémon",
  },
  {
    path: "/types-table",
    icon: <IoCalculator size={40} />,
    title: "Tabla de tipos",
    subTitle: "Tabla de tipos de Pokémon",
  },
  {
    path: "/favourites",
    icon: <IoHeartOutline size={40} />,
    title: "Favoritos",
    subTitle: "Tus pokémons favoritos!",
  },
];

export const SideBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [windowDimention, setWindowDimention] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setWindowDimention({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const detectDimention = () => {
      setWindowDimention({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", detectDimention);
    return () => {
      window.removeEventListener("resize", detectDimention);
    };
  }, []);

  return (
    <div id="menu">
      <div
        style={
          windowDimention.width < 700 ? { width: "250px" } : { width: "300px" }
        }
        className="fixed bg-gray-900 min-h-screen text-slate-300 w-64 left-0 overflow-y-scroll"
      >
        <div id="logo" className="my-4 px-6">
          <h1 className="flex items-center  text-lg md:text-2xl font-bold text-white">
            Poke Api
            <span className="text-blue-500">
              <RiNextjsLine className="ml-4" size={30} />
            </span>
          </h1>
          <p className="text-slate-500 text-sm">
            Lista de todos los pokémon de Kanto
          </p>

          <p className="text-slate-500 text-sm columns-1 flex-col">
            Poke Api hecha gracias a
          </p>
          <Link className="underline" href={"https://pokeapi.co"}>
            https://pokeapi.co/
          </Link>
        </div>

        <div id="nav" className="w-full px-6 mt-14">
          {menuItems.map((item) => (
            <SideBarMenuItem key={item.path} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
