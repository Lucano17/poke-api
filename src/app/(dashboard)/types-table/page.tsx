import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Counter Page",
  description: "Un Simple contador",
};

export default function TypesTablePage() {
  return (
    <div>
      <h1
      className="text-center font-bold text-lg"
      >Tabla de tipos de Pokémon</h1>
      <div className="mr-10 relative sm2:w-[450] sm:w-[325] md:w-[450] lg:w-[600]">
        <Image
          className="mt-[20] ml-[55]"
          src="/pokemon/type-table.jpg"
          alt="Table type image"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
}
