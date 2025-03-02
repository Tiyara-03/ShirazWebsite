"use client";

export interface Items {
    id: number;
    image: string;
    title: string;
}

const ItemCards: React.FC<Items> = ({ image, title }) => {
    return (
        <div className="rounded-xl w-[18rem] md:w-[25rem] h-[24rem] md:h-[31rem]  bg-[#9d9974] flex justify-center items-center flex-col shadow-md bg-cover bg-center relative" style={{ backgroundImage: "url('/images/bgpattern2.jpg')" }} >
            <h1 className="text-white text-3xl font-playfair font-semibold">{title}</h1>
                <img src={image} alt="N/A" />
        </div>
    )

}

export default ItemCards;
