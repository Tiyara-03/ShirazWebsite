'use client'
import anime from 'animejs/lib/anime.es.js';
import { useEffect, useState } from 'react';

interface Splashscreenprops {
    finishloading: () => void;
}

export default function Splashscreen({ finishloading }: Splashscreenprops) {

    const [isMounted, setIsMounted] = useState(false)

    const animate = () => {
        const loader = anime.timeline({
            complete: () => finishloading(),
        })

        loader.add({
            targets: "#logo",
            delay: 0,
            scale: 1,
            duration: 500,
            easing: "easeInOutExpo",
        })

        loader.add({
            targets: "#logo",
            delay: 0,
            scale: 1.5,
            duration: 3000,
            easing: "easeInOutExpo",
        })

        loader.add({
            targets: "#bgImage",
            width: window.innerWidth < 768 ? "full": "50vw",
            height: window.innerWidth < 768 ? "50vh" : "100vh",
            duration: 2000,
            easing: "easeInOutExpo",
        }, "-=1500");

        loader.add({
            targets: "#text",
            opacity: [0, 1],
            // width: "40vw",
            duration: 2000,
            easing: "easeInOutExpo",
            translateX: window.innerWidth < 768 ? [0, 0] : [-50, 0],
            translateY: window.innerWidth < 768 ? [-1, 200] : [0,0],
        }, "-=1000");

    }

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10)
        animate()
        return () => clearTimeout(timeout)
    })
    return (
        <>
            <div id='bgImage'
                style={{ backgroundImage: "url('/images/splash.jpeg')" }}
                className="bg-cover bg-center bg-no-repeat ">
                <div className="w-full h-screen flex flex-row justify-center items-center">
                    <img id='logo' src="/images/logo.png" alt="N/A" className="w-[10rem] h-auto lg:w-[20rem]" />
                </div>
            </div>
            <div className='h-full flex justify-center items-center md:right-20 top-0 absolute text-center w-[40vw] right-28'>
                <h1 id='text' className="lg:text-8xl text-5xl font-playfair text-transparent bg-clip-text bg-gradient-to-b from-green-700 to-red-700">WELCOME TO SHIRAZ</h1>
            </div>
        </>
    )
}
