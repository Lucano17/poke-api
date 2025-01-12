import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Counter Page",
    description: "Un Simple contador",
}

export default function NamePage() {
  return (
    <div>
      <h1>Hello Page</h1>
    </div>
  );
}