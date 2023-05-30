"use client";

import Image from "next/image";
import yamato from '/public/images/yamato.jpg';
import { PlayList } from "../types/types";
import  AudioPlayer from "react-modern-audio-player";
import {ImShuffle, ImBackward, ImPlay2, ImForward2, ImPause, ImVolumeMedium} from "react-icons/im"

const Player = ( { play }: { play: PlayList[] }) => {
    const placeholder = [
        {
          src: "",
          id: 1,
        },
      ];
    return (
        <>
            <div className="w-full fixed left-0 bottom-0 h-32 border-t border-gray-200 items-center bg-pink-100">
                {/*<div className="ml-12 flex items-center   ">
                    <Image src={yamato} alt="img" className="object-cover rounded w-32 h-32"/>
                    <div className="ml-4 mb-8">
                        <h1 className=" text-2xl">title</h1>
                        <h3 className=" text-xl">artist</h3>
                    </div>                
                </div>
                <div className="flex justify-center items-center flex-col w-full m-auto">
                    <div className="items-center flex">
                        <p className=" text-lg mx-4">0:00</p>
                        <input type="range" className=" border-2 border-gray-300 appearance-none rounded-md h-3 m-auto w-80"/>
                        <p className=" text-lg mx-4">4:44</p>
                    </div>
                    <div className="flex text-4xl mt-4">
                        <button className="musicb"><ImShuffle/></button>
                        <button className="musicb"><ImBackward/></button>
                        <button className="musicb"><ImPlay2/></button>
                        <button className="musicb"><ImForward2/></button>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-end">
                        <button className="text-2xl text-gray-600"><ImVolumeMedium/></button>
                        <input type="range" step="0.01" max="1" min="0" className="border-2 border-gray-300 appearance-none rounded-md h-3 mr-6"/>
                    </div>
                </div>*/}
                <AudioPlayer activeUI={{all:true}}  playList={!!play[0] ? play : placeholder} />             
            </div>
            
        </>
    );
  };
  export default Player;