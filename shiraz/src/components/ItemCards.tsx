"use client";


export interface Items {
    id: number;
    image: string;
    title: string;
}

const ItemCards: React.FC<Items> = ({ image, title }) => {
    return (
        <div className="w-[22rem] h-[27rem] rounded-3xl bg-gradient-to-r from-[#6f4b2f] to-[#472e1d]"> {/**bg-[#6f4b2f] */}
            <h1 className="flex justify-center items-center text-2xl text-white p-4 font-extrabold">{title}</h1>
            <div className="w-[20rem] h-[24rem]">
                <img src={image} alt="N/A" className="rounded-3xl w-full h-full"/>
            </div>

        </div>
    )
}

export default ItemCards;
