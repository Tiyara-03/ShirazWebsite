import About from "@/components/About";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div className="bg-[#c9b58a]">   {/* flex flex-col gap-20*/}
      <Hero/>
      <About/>
    </div>
  );
}
