import React from "react";
import { FaFire } from "react-icons/fa";
import CharacterPng1 from "../../assets/characters/character1.png";
import Game1 from "../../assets/game/game1.jpg";
import Game2 from "../../assets/game/game2.jpg";
import Game3 from "../../assets/game/game3.jpg";
import Game4 from "../../assets/game/game4.jpg";
import Game5 from "../../assets/game/game5.jpg";
import Game6 from "../../assets/game/game6.jpg"


const GameCardData = [
  {
    id: 1,
    title: "Pubg Battleground",
    image: Game1,
    followers: 30,
  },
  {
    id: 2,
    title: "Resident Evil 4",
    image: Game2,
    followers: 35,
  },
  {
    id: 3,
    title: "Call Of Duty Modern Warfare",
    image: Game3,
    followers: 35,
  },
  {
    id: 4,
    title: "Smackdown Vs Raw 2021",
    image: Game4,
    followers: 35,
  },
  {
    id: 5,
    title: "Prince Of Persia",
    image: Game5,
    followers: 35,
  },
  {
    id: 6,
    title: "God Of War",
    image: Game6,
    followers: 55,
  },
];
const TrendingGames = () => {
  return (
    <>
      <section className="py-10 bg-primary text-white">
        <div className="container relative">
          {/* Header section */}
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold">Currently Trending Games</h1>
           
          </div>
          {/* Trending Games Card section */}
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-8">
              {/* Game Card */}
              {GameCardData.map((item) => {
                return (
                  <div className="" key={item.id}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[200px] object-cover rounded-xl"
                    />
                    <div className="text-center mt-3">
                      <p>{item.title}</p>
                      <p className="flex items-center justify-center gap-2">
                        <FaFire />
                        <span>{item.followers}</span> followers
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Character Png */}
          <img
            src={CharacterPng1}
            alt="not found"
            className="absolute left-[-120px] top-0 z-[1] h-[340px]"
          />
        </div>
      </section>
    </>
  );
};

export default TrendingGames;
