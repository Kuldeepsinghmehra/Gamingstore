import React from 'react'
import Game1 from "../../assets/Explore/game1.webp";
import Game2 from "../../assets/Explore/game2.webp";
import Game3 from "../../assets/Explore/game3.avif";
import Game4 from "../../assets/Explore/game4.webp";
import Game5 from "../../assets/Explore/game5.jpg";
import Game6 from "../../assets/Explore/game6.webp";
const GameCardData = [
  {
    id: 1,
    title: "Counter Strike",
    image: Game1,
    price:400 
  },
  {
    id: 2,
    title: "Valorant",
    image: Game2,
    price:450
  
  },
  {
    id: 3,
    title: "Call Of Duty Warzone",
    image: Game3,
    price:500
  
  },
  {
    id: 4,
    title: "Spiderman",
    image: Game4,
    price:500
   
  },
  {
    id: 5,
    title: "Ufc",
    image: Game5,
    price:450
   
  },
  {
    id: 6,
    title: "WWWE 2K23",
    image: Game6,
    price:450
    
  },
 
];
export const Explore = () => {
  return(
    <>
      <section className="py-10 bg-gray-900 text-white">
      <div className="container ">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold ">Explore New Releases</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {GameCardData.map((item) => (
            <div className="bg-gray-800 rounded-xl overflow-hidden" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[200px] object-cover rounded-xl"
              />
              <div className="p-4 text-center">
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="text-lg font-semibold">₹ {item.price}</p>
                <button className="bg-blue-500 text-white mt-2 px-4 py-2 rounded-full">
                  Purchase
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  )
 

  
}
export default Explore