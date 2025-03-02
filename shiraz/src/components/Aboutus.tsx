import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";


export default function Aboutus() {

  const data = [
    {
      title: "Hi!",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium mb-1 font-tajwal">
            I'am Khaled S Mohammed, born in Tabriz, Iran, and raised in Puerto Rico. 
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium font-tajwal mb-8">
            My passion for Middle Eastern cuisine and bakery brings you recipes with a Caribbian twist.
            </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/jhony1.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
            <Image
              src="/images/jhony2.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
            <Image
              src="/images/johny3.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
            <Image
              src="/images/jhony4.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "About Shiraz",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium mb-2">
            At Shiraz, every dish and baked delight is crafted with care, honoring my heritage and offering a unique taste experience.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium mb-8">
            With locations in Caguas and Guaynabo, and events at Plaza Las Americas, our glowing reviews reflect our commitment to quality and innovation.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/fruit1.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
            <Image
              src="/images/fruit2.jpeg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
            <Image
              src="/images/fruit3.jpeg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
            <Image
              src="/images/fruit4.jpeg"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Our Offers",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium mb-4">
            We Provide Middle Eastern Cuisine
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              ✅ Mediterrian Food and Snacks
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              ✅ Natural Fruit Juices
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              ✅ Our authentic baked sweets
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              ✅ Combo Offers
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              ✅ And Free Items as well
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/food.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
            <Image
              src="/images/bake.jpeg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
            <Image
              src="/images/juice.jpeg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
            <Image
              src="/images/food.jpeg"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    // <div className="w-full px-4">
    //     <div>
    //         <h1 className="text-3xl font-playfair font-semibold">About Us</h1>
    //     </div>
    //   <div className="rounded-2xl bg-[#958063] p-8 mx-auto">
    //     <div className="flex flex-col md:flex-row gap-8">
    //         <div>
    //             <img src="/images/food.jpeg" alt="N/A" className="w-[33rem] h-auto rounded-2xl"/>
    //         </div>
    //         <div className="max-w-[30rem] flex justify-center items-center">
    //             <p>'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, aut dicta quam aspernatur sed ea quisquam molestiae perspiciatis modi deserunt?'</p>
    //         </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full">
      <Timeline data={data} />
    </div>
  )
}
