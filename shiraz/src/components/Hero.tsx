import Image from "next/image";
import ItemCards, {Items} from "./ItemCards"


const menuItems: Items[] = [
    {
        id: 1,
        image: "/images/Bakalava.jpeg", title: "نانوایی و شیرینی‌پزی"
    },

    {
        id: 2,
        image: "/images/juices.jpeg", title: "آبمیوه طبیعی"
    },

    {
        id: 3,
        image: "/images/food1.jpeg", title: "غذای خاورمیانه‌ای و مدیترانه‌ای"
    }
]


const Hero = () => {

    return (
        <>
        {/* Hero Section */}
        <section>
            {/* <div className='absolute inset-0 bg-black/15 z-20 w-full h-[80vh] md:top-20 top-40'></div> */}
            <div className='w-full h-[80vh] bg-cover bg-center relative' style={{ backgroundImage: "url('/images/Herobg.jpeg')" }}>
                <div className="flex justify-center items-center h-full w-full">
                    <img src="/images/logo.png" alt="" className="w-[10rem] h-auto bg-transparent ml-10"/>
                </div>
            </div>        
        </section>

        {/* Items Section */}
        <section className='bg-[#c9b58a] mt-10 bg-cover bg-center relative'>
            <div className='w-full md:p-8 py-8  flex flex-col justify-center items-center relative z-10'>
                <div className='mt-10'>
                    <h1 className='font-playfair font-extrabold text-5xl bg-clip-text text-transparent bg-gradient-to-b  from-green-900 to-red-900'>Our Special For You</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-8 md:gap-16'>
                    {menuItems.map((item)=> (
                    <div>
                        <ItemCards key={item.id} {...item}/>
                    </div>
                    ))}                    
                </div>

            </div>
        </section>
        </>
    )
}

export default Hero;