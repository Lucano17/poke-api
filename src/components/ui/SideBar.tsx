import Image from "next/image";
import {
  IoBrowsersOutline,
  IoCalculator,
  IoHeartOutline,
  IoLogoReact,
} from "react-icons/io5";
import { RiNextjsLine } from "react-icons/ri";
import { MdCatchingPokemon } from "react-icons/md";
import { SidebarMenuItem } from "./SideBarMenuItem";
import Link from "next/link";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: (
      <MdCatchingPokemon size={40} style={{ transform: "rotate(180deg)" }} />
    ),
    title: "Pokémons",
    subTitle: "Todos los pokémon",
  },
  {
    path: "/dashboard/types-table",
    icon: <IoCalculator size={40} />,
    title: "Tabla de tipos",
    subTitle: "Tabla de tipos de Pokémon",
  },
  {
    path: "/dashboard/favourites",
    icon: <IoHeartOutline size={40} />,
    title: "Favoritos",
    subTitle: "Tus pokémons favoritos!",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "300px" }}
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

      {/* <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="User avatar"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Fernando Herrera
          </span>
        </a>
      </div> */}

      <div id="nav" className="w-full px-6 mt-14">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};
