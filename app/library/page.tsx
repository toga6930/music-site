"use client";
import React, { useState } from "react";
import Navbar from '../components/Navbar';
import Player from '../components/Player';
import Likes from "../components/Likes";
import { PlayList } from "../types/types";

const Library = () => {
    const [play, setPlay] = useState<PlayList[]>([]);
    const [search, setSearch] = useState("");

    const songSearch = (search: string) => {
        setSearch(search);
    };
    const songPlay = (song: PlayList) => {
        setPlay([song]);
    };
    return (
        <>
            <Navbar songSearch={songSearch}/>    
            <Likes />
            <Player play={play} />  
        </>
    );
  };
  export default Library;