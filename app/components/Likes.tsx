import React, { useEffect, useState } from "react";
import { SongInt } from "../types/types";
import Image from "next/image";

const Likes = () => {
    const [liked, setLiked] = useState<SongInt[]>([]);
    useEffect(() => {
        const storedLikedSongs = localStorage.getItem("likedSongs");
        if (storedLikedSongs) {
          const parsedLikedSongs: SongInt[] = JSON.parse(storedLikedSongs);
          setLiked(parsedLikedSongs);
        }
      }, []);
    const handleDelete = (songId: number) => {
        const updatedLikedSongs = liked.filter((song) => song.id !== songId);
        setLiked(updatedLikedSongs);
        localStorage.setItem("likedSongs", JSON.stringify(updatedLikedSongs));
    };
    return (
        <>
            <div className="flex cursor-pointer w-full min-h-screen justify-center pt-16 pb-20 dark:bg-slate-800">
                <ul className="max-w-screen-lg">
                    {liked.map((song) => (
                        <li key={song.id} 
                            className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 space-x-2 md:space-x-8 border-4 rounded-lg mt-2 md:w-full border-pink-200 hover:bg-pink-200 dark:hover:bg-slate-900 dark:text-pink-100 shadow-lg">
                            <div className="flex-shrink-0">
                                <Image className="w-28 h-28 p-2 md:mx-auto" src={song.img_medium} alt="cover"/>
                            </div>
                            <div className="flex-1">
                                <p className="flex text-center truncate md:m-auto text-2xl">
                                    {song.title} - {song.artist}
                                </p>
                            </div>
                            <div>
                                <button className="bg-pink-200 mr-2  text-slate-500 text-lg hover:text-slate-800 hover:bg-pink-100 shadow-md"
                                onClick={() => handleDelete(song.id)}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>  
        </>
    );
  };
  export default Likes;