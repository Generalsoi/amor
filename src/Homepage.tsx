import React, { FC } from "react";
import Amor8 from "./assets/amorone.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Homepage: FC = () => {
  return (
    <div className="font-ibmPlexMono w-[100%] h-screen md:flex relative">
      <div className="md:w-[50%] h-[50%] md:h-full flex flex-col items-center justify-center animate-pulse">
        <h1 className="md:text-7xl text-4xl font-extrabold">How are you?</h1>
        <h1 className="md:text-7xl text-4xl font-extrabold">My love</h1>
      </div>
      <img
        className="md:w-[50%] h-[50%] md:h-full w-[100%] object-cover"
        src={Amor8}
        alt="my-baby"
      />

      <div className="absolute md:bottom-4 md:right-[50%] md:top-auto top-8 px-4 right-4 flex items-center gap-3">
        <p>Click here to view some goodies</p>
        <Link to="/details">
          <button className="cursor-pointer animate-bounce px-2 py-2 border-2 border-black rounded-full">
            <AiOutlineArrowRight className="text-3xl" />
          </button>
        </Link>
      </div>
    </div>
  );
};
