"use client";

import dynamic from 'next/dynamic';
import React, { useState } from "react";

const Likes = dynamic(() => import('../components/Likes'), {
    ssr: false,
});
const Navbar = dynamic(() => import('../components/Navbar'), {
    ssr: false,
}); 
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