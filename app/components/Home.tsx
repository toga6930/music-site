"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { PlayList, DeezerResp } from "../types/types";
import Musics from "./Musics";


const Home = ({ songPlay, search }:{ songPlay: (song: PlayList) => void; search: string }) => {
    const [apiSongs, setApiSongs] = useState<DeezerResp[]>([]);
    const [error, setError] = useState<any>({});

    useEffect(() => {
        let param = {q: "Kanye West"};
        if (search.length > 1) {
            param = { q: search };
        }
        const options = {
            method: "GET",
            url: "https://deezerdevs-deezer.p.rapidapi.com/search",
            params: param,
            headers: {
                "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
                "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            },
        };
        axios
            .request(options)
            .then(function (response) {
                setApiSongs(response.data.data);
            })
            .catch(function (error) {
                setError(error);
                console.error(error);
            });
        }, [search, process.env.NEXT_PUBLIC_RAPIDAPI_KEY]);

    return (
        <div className="flex justify-center w-full m-auto">
            <ul>
            {apiSongs?.length > 1 ? apiSongs.map((data: any) => (              
                <li key={data.id}>
                    <Musics
                        id={data.id}
                        title={data.title}
                        artist={data.artist.name}
                        preview={data.preview}
                        img_small={data.album.cover_small}
                        img_medium={data.album.cover_medium}
                        songPlay={songPlay}
                    />
              </li>
            )) : null}
            </ul>
        </div>
    )
}
export default Home;