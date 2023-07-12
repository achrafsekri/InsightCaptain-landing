import FAQ from "@/components/home/FAQ";
import FeauturesNav from "@/components/home/FeauturesNav";
import Header from "@/components/home/Header";
import Testimonial from "@/components/home/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen ">
      <Header />
      <FeauturesNav />
      <Testimonial />
      <FAQ />
    </div>
  );
}
