import Link from "next/link";
import 'remixicon/fonts/remixicon.css'
import { useState } from "react";



const flags1 = [
    {
        id: 1,
        img: "/images/iran.png",
    },

    {
        id: 2,
        img: "/images/puerto-rico.png"
    },

    {
        id: 3,
        img: "/images/egypt.png"
    },

    {
        id: 4,
        img: "/images/yemen.png"
    },


]

const flags2 = [
    {
        id: 1,
        img: "/images/syria.png"
    },

    {
        id: 2,
        img: "/images/lebanon.png"
    },

    {
        id: 3,
        img: "/images/russia.png"
    },
]


export default function Navbar() {

    const [IsMenuopen, setIsMenuopen] = useState(false);

    const toggleMenu = () => setIsMenuopen(!IsMenuopen)


    return (
        <>
            <div className="w-full xl:px-8 mx-auto bg-[#e6dfcf]"> {/*bg-[#e6dfcf] */}
                <div className="flex flex-row justify-between items-center">
                    {/* Logo */}
                    <div className=" w-full flex flex-col justify-start items-start md:flex-row gap-0 md:gap-4">
                        <div className="flex flex-row gap-3 md:gap-8 p-2">
                            {flags1.map((item) => (
                                <img key={item.id} src={item.img} alt="N/a" className="w-[4rem] h-auto rounded-2xl" />
                            ))}
                        </div>

                        <div className="flex flex-row gap-3 md:gap-8 p-2">
                            {flags2.map((item) => (
                                <img key={item.id} src={item.img} alt="N/a" className="w-[4rem] md:w-[4rem] h-auto rounded-2xl" />
                            ))}
                        </div>

                    </div>

                    {/* Links */}
                    <div className="hidden md:flex md:flex-row flex-col gap-10 lg:px-10  lg:mr-10">
                        <Link href={"#"} className="px-3 py-1 w-[8rem] bg-[#4c714d] rounded-xl font-tajwal font-semibold flex justify-center items-center">Menu Items</Link>
                        <Link href={"#"} className="px-3 py-1 w-[8rem] bg-[#e16e5a] rounded-xl font-tajwal font-semibold flex justify-center items-center">About Us</Link>
                    </div>

                    {/* Mobile Menu */}
                    <div className="flex md:hidden justify-end">
                        <button onClick={toggleMenu} className="text-[#5d3625]">
                            <i className="ri-menu-line text-4xl"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`absolute md:hidden top-0 z-50 right-0 w-[80%] h-[100vh] bg-[#6f4b2f] rounded-lg  text-white transform ${IsMenuopen ? 'translate-x-0' : 'translate-x-full'} ${IsMenuopen ? '' : 'hidden'} transition-all duration-300 ease-in-out`}
            >
                {/* Close Icon */}
                <div className='flex justify-between p-5 w-full mt-5 bg-[#e6dfcf] rounded-lg text-[#6f4b2f]'>
                    <div className="flex flex-row justify-center items-center gap-6">
                        <img src="/images/logo.png" alt="" className="w-16"/>
                        <h1 className="text-3xl font-bold font-playfair">Shiraz</h1>
                    </div>
                    <button onClick={toggleMenu} className='text-5xl'>
                        &times; {/* Cross symbol */}
                    </button>
                </div>

                {/* Mobile Menu Links */}
                <div className='flex flex-col items-center mt-6'>
                    <Link href={"#"} onClick={toggleMenu} className='py-3 hover:underline text-2xl font-semibold transition-all duration-300'>نانوایی و شیرینی‌پزی</Link>
                    <Link href={"#"} onClick={toggleMenu} className='py-3 hover:underline text-2xl font-semibold transition-all duration-300'>آبمیوه طبیعی</Link>
                    <Link href={"#"} onClick={toggleMenu} className='py-3 hover:underline text-2xl font-semibold transition-all duration-300'>غذای خاورمیانه‌ای و مدیترانه‌ای"</Link>
                    <Link href={"#"} onClick={toggleMenu} className='py-3 hover:underline text-2xl font-semibold transition-all duration-300'>About Us</Link>
                </div>
            </div>
        </>
    )
}
