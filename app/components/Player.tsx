import Image from "next/image";
import yamato from '/public/images/yamato.jpg'

const Player = () => {
    return (
        <>
            <div className="flex w-full justify-start h-40 border-t border-gray-200 z-20 bg-pink-100">
                <div>
                    <Image src={yamato} alt="img" className="object-cover rounded w-24 h-24"/>
                    <h1>title</h1>
                    <h3>artist</h3>
                </div>
                <div>
                    <div>
                        <p>0:00</p>
                        <input type="range"/>
                        <p>4:44</p>
                    </div>
                    <div>
                        <button>suffle</button>
                        <button>back</button>
                        <button>play</button>
                        <button>forward</button>
                    </div>
                </div>
                <div>
                    <div>
                        <button>volume</button>
                        <input type="range" step="0.01" max="1" min="0"/>
                    </div>
                </div>
            </div>
        </>
    );
  };
  export default Player;