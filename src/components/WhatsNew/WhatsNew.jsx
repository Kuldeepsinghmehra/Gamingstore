import React, { useState } from "react";
import { FaHeartbeat } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { IoLogoApple } from "react-icons/io";
import { IoLogoBuffer } from "react-icons/io";
import { IoLogoDribbble } from "react-icons/io";
import Game1 from "../../assets/game/WN1.jpg";
import Game2 from "../../assets/game/Wn2.jpg";
import Game3 from "../../assets/game/Wn3.jpg";
import { FaWindows } from "react-icons/fa";
import WhatsNewCard from "./WhatsNewCard";

const WhatsNewData = [
  {
    image: Game1,
    title:
      "Assassins Creed",
    description:
      "This action-adventure game series immerses players in richly detailed open-world environments, blending historical fiction with engaging stealth gameplay. As a member of the Assassin Brotherhood, uncover hidden secrets, take on powerful enemies, and shape the course of history across various iconic eras. With captivating storytelling and breathtaking visuals, Assassin's Creed offers an unforgettable gaming experience",
    icon: <FaWindows />,
  },
  {
    image: Game2,
    title:
      "Hitman Agent 47",
    description:
      "Step into the shoes of Agent 47, the world's most skilled assassin, in Hitman. This stealth action game series challenges players to execute high-stakes contracts across exotic global locations. With unparalleled freedom to plan and execute missions, use disguises, tools, and creative strategies to eliminate targets. Each level is a sandbox of opportunities, offering multiple paths to achieve your objectives. Hitman delivers a gripping experience filled with precision, strategy, and suspense?",
    icon: <FaWindows />,
  },
  {
    image: Game3,
    title:
      "Valorant Riot Games",
    description:
      "Valorant is a fast-paced, tactical first-person shooter from Riot Games. Set in a near-future world, players engage in intense 5v5 matches, combining precise gunplay with unique agent abilities. Each agent brings their own set of skills to the battlefield, allowing for dynamic team strategies and gameplay. With a focus on competitive integrity and strategic depth, Valorant offers an exhilarating experience for both casual players and esports enthusiasts",
    icon: <FaWindows />,
  },
];

const WhatsNew = () => {
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");
  const [isModalOpen, setIsModalOpen]=useState(false)
  const handleEmailChange=(e)=>
  {
    setEmail(e.target.value)

  }
  const handleSubscribe=()=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      setIsModalOpen(true)
      return;
    }
    setMessage("Thank you for subscring")
    setIsModalOpen(true);
    setEmail(" ")
  }
  const closeModal = () => {
    setIsModalOpen(false);
    setMessage("");
  };
  return (
    <>
      <div className="py-10 bg-primary text-white">
        <div className="container">
          {/* Header section */}
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold">What's New</h1>
            <div className="flex gap-4 items-center">
              <div className="flex gap-4 items-center">
                <IoLogoAndroid className="text-xl cursor-pointer" />
                <IoLogoApple className="text-xl cursor-pointer" />
                <IoLogoBuffer className="text-xl cursor-pointer" />
                <IoLogoDribbble className="text-xl cursor-pointer" />
              </div>
            </div>
          </div>

          {/* What's New Card section */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 my-8 ">
            {/* Card section */}
            <div className="col-span-3 grid grid-cols-1 gap-6">
              {WhatsNewData.map((data, index) => (
                <WhatsNewCard key={index} {...data} />
              ))}
            </div>
            {/* subsribe  newsletter section */}
            <div className="col-span-1">
              <div className="bg-gray-400/10 rounded-xl p-4 space-y-3">
                <FaHeartbeat className="bg-orange-400/30 p-2 rounded-lg inline-block h-[40px] w-[40px]" />
                <h1 className="text-2xl  font-semibold">
                  Subscribe To Our Newletter
                </h1>
                <p className="text-sm text-white/70 line-clamp-2">
                Get the latest updates about the new realease and more exciting discounts
                </p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleEmailChange}
                  className="bg-gray-400/20 px-4 py-2 rounded-lg w-full"
                  placeholder="Enter Your Email"
                />
                <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-xl px-4 py-2"
                onClick={handleSubscribe}>
                  Subscribe
                </button>
                {message && <p className="mt-2 text-sm text-green-400">{message}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm mx-auto">
            <h2 className="text-xl font-semibold mb-4">{message}</h2>
            <button onClick={closeModal} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Close
            </button>
          </div>
        </div>
      )}

    </>
  );
};

export default WhatsNew;
