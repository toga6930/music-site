import Link from "next/link";
import {ImGithub, ImYoutube} from "react-icons/im"
import {AiFillCodeSandboxCircle} from "react-icons/ai"
import {SiBandlab} from "react-icons/si"

const About = ({onClose}: {onClose: () => void}) => {
    
    return (
        <>
            <div className="fixed flex inset-0 items-center justify-center z-50">
                <div className="absolute inset-0 bg-black opacity-25"></div>
                <div className="relative bg-pink-200 w-1/2 p-8 rounded-md shadow-lg">
                    <button onClick={onClose} className="text-xl cursor-pointer absolute top-0 right-0 hover:text-slate-500">X
                    </button>
                    <h1 className="text-3xl m-4 font-bold">About</h1>
                    <div className="text-lg">
                        <p> Hello, Lil Hoon Here, I wanna make music site so I tried it as I can. 
                            I use Deezer Api, from RapidApi. This project made by Next JS 13, Tailwind Css. 
                            Also I use react-modern-audio-player. You can search using search bar just typing artist, song, album etc. 
                            And When You click heart Icon, song goes to library page and You can check what you liked.
                            Sadly It&apos;s free api, So you can only listen 30 seconds preview.
                            If you liked it, check my github and youtube!
                        </p>
                    </div>
                    <div className="flex text-3xl text-center">
                        <Link className="mx-2 mt-4" target="_blank" href="https://github.com/LeaDerBone"><ImGithub/></Link>
                        <Link className="mx-2 mt-4" target="_blank" href="https://www.youtube.com/channel/UCRsWzjQhuKD26OrMdnhoiCw"><ImYoutube /></Link>
                        <Link className="mx-2 mt-4" target="_blank" href="https://codesandbox.io/u/LeaDerBone"><AiFillCodeSandboxCircle /></Link>
                        <Link className="mx-2 mt-4" target="_blank" href="https://www.bandlab.com/leaderbone"><SiBandlab /></Link>
                    </div>
                </div>
            </div>
        </>
    );
  };
export default About;