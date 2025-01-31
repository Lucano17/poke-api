"use client";

import {
  IoCalculator,
  IoCloseCircleOutline,
  IoHeart,
  IoHeartOutline,
} from "react-icons/io5";
import { RiNextjsLine } from "react-icons/ri";
import { MdCatchingPokemon } from "react-icons/md";
import { SideBarMenuItem } from "./SideBarMenuItem";
import Link from "next/link";
import { useUIStore } from "@/store/ui/ui-store";
import { usePathname } from "next/navigation";

export const FullMenu = () => {
  const pathname = usePathname();

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
      icon:
        pathname === "/favourites" ? (
          <IoHeart size={40} />
        ) : (
          <IoHeartOutline size={40} />
        ),
      title: "Favoritos",
      subTitle: "Tus pokémons favoritos!",
    },
  ];


  const closeFullMenu = useUIStore((state) => state.closeFullMenu);

  return (
    <div id="menu">
      <div
        // style={{ width: "screen" }}
        className="fixed bg-gray-900 min-h-screen min-w-full text-slate-300 w-64 left-0 overflow-y-scroll"
      >
        <div className="flex justify-center gap-5">
          <div id="logo" className="flex flex-col my-4 ml-10 min-w-[200px]">
            <h1 className="flex items-center text-xl sm2:text-3xl font-bold text-white">
              Poke Api
              <span className="text-blue-500">
                <RiNextjsLine className="ml-4" size={60} />
              </span>
            </h1>
            <p className="text-slate-500 text-lg">
              Lista de todos los pokémon de Kanto
            </p>

            <p className="text-slate-500 text-md columns-1 flex-col">
              Poke Api hecha gracias a
            </p>
            <Link className="underline text-md" href={"https://pokeapi.co"}>
              https://pokeapi.co/
            </Link>
          </div>

          <button className="top-10 mr-10" onClick={closeFullMenu}>
            <IoCloseCircleOutline size={70} />
          </button>
        </div>

        <div id="nav" className="w-full px-6 mt-14">
          {menuItems.map((item) => (
            <div key={item.path} onClick={closeFullMenu}>
              <SideBarMenuItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
