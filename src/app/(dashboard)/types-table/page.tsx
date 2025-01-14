import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Counter Page",
    description: "Un Simple contador",
}

export default function TypesTablePage() {
  return (
    <div className="">
      <Image
      className="mt-[20] ml-[55]"
      src="/pokemon/type-table.jpg"
      alt="Table type image"
      width={600}
      height={600}/>
    </div>
  );
}