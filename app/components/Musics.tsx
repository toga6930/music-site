import React from "react";
import { PlayList, SongInt } from "../types/types";

const Musics = ({ id, title, artist, preview, img_medium, img_small, songPlay }: SongInt) => {
    const handleClick = () => {
      const playSong: PlayList = {
        id: 1,
        name: title,
        writer: artist,
        img: img_small,
        src: preview,
      };
      songPlay(playSong);
    };
  
    return (
      <div className='flex p-5 cursor-pointer hover:bg-slate-200' onClick={handleClick}>
        <img src={img_small} alt='imd' />
        <p className='pl-2 d-flex self-center'>
          {title} - {artist}
        </p>
      </div>
    );
  };
  
  export default Musics;