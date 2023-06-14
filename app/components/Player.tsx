
import { PlayList } from "../types/types";
import  AudioPlayer from "react-modern-audio-player";

const Player = ( { play }: { play: PlayList[] }) => {
    const placeholder = [
        {
          src: "",
          id: 1,
        },
      ];
    return (
        <>
            <div className="w-full fixed left-0 bottom-0 border-t-2 border-gray-200 items-center bg-pink-100">
                <AudioPlayer activeUI={{all:true}}  playList={!!play[0] ? play : placeholder} />             
            </div>      
        </>
    );
  };
  export default Player;