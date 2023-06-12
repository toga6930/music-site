"use client";

import Likes from "../components/Likes";
import React, { useState } from "react";
import Navbar from '../components/Navbar';

const Library = () => {
    const [search, setSearch] = useState("");

    const songSearch = (search: string) => {
        setSearch(search);
    };
  
    return (
        <>
            <Navbar songSearch={songSearch}/>
            <Likes />
        </>
    );
  };
  export default Library;