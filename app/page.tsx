import Explore from "@/components/Sections/Explore";
import Hero from "@/components/Sections/Hero";
import Pricing from "@/components/Sections/Pricing";
import SecondCards from "@/components/Sections/SecondCards";
import { Trusted } from "@/components/Sections/Trusted";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <SecondCards />
      <Trusted />
      <Pricing />
      <Explore />
    </main>
  );
}
