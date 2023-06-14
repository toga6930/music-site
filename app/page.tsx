"use client"

import React, { useState } from "react";
import dynamic from 'next/dynamic';
import { PlayList } from "./types/types";

const Navbar = dynamic(() => import('./components/Navbar'), {
  ssr: false,
});
const Player = dynamic(() => import('./components/Player'), {
  ssr: false,
});
const Home = dynamic(() => import('./components/Home'), {
  ssr: false,
});
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
