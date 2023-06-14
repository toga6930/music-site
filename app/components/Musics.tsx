
import React, { useState } from "react";
import { PlayList, SongInt } from "../types/types";
import {AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import Image from "next/image";

const Musics = ({ id, title, artist, preview, img_medium, songPlay }: SongInt) => {
    const [isFav, setIsFav] = useState(false);
    const handleClick = () => {
      const playSong: PlayList = {
        id: 1,
        name: title,
        writer: artist,
        img: img_medium,
        src: preview,
      };
      songPlay(playSong);
    };
    const handleFav = (e: React.MouseEvent<SVGSVGElement>) => {
      e.stopPropagation(); 
      setIsFav((prevIsFav) => !prevIsFav);
      if (!isFav) {
        const likedSongs =
          JSON.parse(localStorage.getItem("likedSongs") || "[]") || [];
        const updateLikedSongs = [
          ...likedSongs,
          { id, title, artist, img_medium, preview },
        ];
        localStorage.setItem("likedSongs", JSON.stringify(updateLikedSongs));
      }
    };

    return (
      <div className='flex p-4 mx-2 mt-4 cursor-pointer border-4 flex-col w-60 h-68 rounded-lg border-pink-200 hover:bg-pink-200 shadow-xl dark:hover:bg-slate-900' onClick={handleClick}>
        <Image className=" w-full p-4" width={300} height={300} src={img_medium} alt='cover' />
        <p className='flex self-center text-xl dark:text-pink-100'>
          {title}
        </p>
        <p className='flex self-center text-lg dark:text-pink-100'>
          {artist}
        </p>
        {isFav ? (
          <AiFillHeart
            className="flex mt-2 self-center text-xl hover:scale-125 dark:text-pink-100"
            onClick={handleFav}/>
          ) : (
          <AiOutlineHeart
            className="flex mt-2 self-center text-xl hover:scale-125 dark:text-pink-100"
            onClick={handleFav}/>
          )}
      </div>
    );
  };
  
  export default Musics;