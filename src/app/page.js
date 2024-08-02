import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <div className="">
    <Link href={"/demo"}>Demo</Link>
    <Navbar/>
  </div>;
}
