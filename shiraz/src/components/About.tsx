'use client'


export default function About() {
  return (
    <div className="bg-cover bg-center bg-no-repeat w-full min-h-[100vh] mt-20 flex justify-center items-center py-8" style={{ backgroundImage: "url('/images/bgpattern.jpg')" }}>
      <div className="w-[95vw] md:w-[80vw] h-auto bg-gradient-to-r from-[#6f4b2f] to-[#472e1d] rounded-3xl p-4 px-4">
        <div className="mb-4">
          <h2 className="text-3xl md:text-5xl mb-4 text-white max-w-4xl font-playfair">
            Welcome to Shiraz
          </h2>
          <p className="text-white text-sm md:text-base max-w-sm font-tajwal font-semibold">
            Where the rich tradition of ancient Persia meet the vibrant spirit of Puerto Rico.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full md:w-[40vw] h-[60vh]">
            <img src="/images/jhony4.jpeg" alt="N/A" className="w-full h-full rounded-3xl" />
          </div>
          <div className="pr-8">
            <p className="text-white text-sm md:text-base font-medium mb-1 font-tajwal">
            Salaam Walaekum! I'am Khaled S Mohammed, born in Tabriz, Iran, and raised in Puerto Rico.
            </p>
            <p className="text-white text-sm md:text-base font-medium font-tajwal mb-8">
              My passion for Middle Eastern cuisine and bakery brings you recipes with a Caribbian twist.
            </p>
            <p className="text-white text-sm md:text-base font-medium mb-2">
              At Shiraz, every dish and baked delight is crafted with care, honoring my heritage and offering a unique taste experience.
            </p>
            <p className="text-white text-sm md:text-base font-medium mb-8">
              With locations in Caguas and Guaynabo, and events at Plaza Las Americas, our glowing reviews reflect our commitment to quality and innovation.
            </p>
            <p className="text-white text-sm md:text-base font-medium mb-4">
              We Provide Middle Eastern Cuisine
            </p>
            <div className="mb-8">
              <div className="flex gap-2 items-center text-white text-sm md:text-base">
                ✅ Mediterrian Food and Snacks
              </div>
              <div className="flex gap-2 items-center text-white text-sm md:text-base">
                ✅ Natural Fruit Juices
              </div>
              <div className="flex gap-2 items-center text-white text-sm md:text-base">
                ✅ Our authentic baked sweets
              </div>
              <div className="flex gap-2 items-center text-white text-sm md:text-base">
                ✅ Combo Offers
              </div>
              <div className="flex gap-2 items-center text-white text-sm md:text-base">
                ✅ And Free Items as well
              </div>              
            </div>
            <p className="text-white text-sm md:text-base font-medium mb-4">Join us for a memorable culinary journey where every bite tells a story of history, culture, and delicious flavor.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <img src="/images/jhony1.jpeg" alt="" className="w-[20rem] h-[20rem] rounded-3xl"/>
          <img src="/images/jhony2.jpeg" alt="" className="w-[20rem] h-[20rem] rounded-3xl"/>
          <img src="/images/johny3.jpeg" alt="" className="w-[20rem] h-[20rem] rounded-3xl"/>
        </div>

      </div>
    </div>
  )
}
