"use client";
import React, { useState } from "react";
import Home from "./components/Home";
import Navbar from './components/Navbar';
import Player from './components/Player';
import { PlayList } from "./types/types";


export default function App(): JSX.Element {
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
      <Home songPlay={songPlay} search={search} />
      <Player play={play} />
    </>
  )
}
