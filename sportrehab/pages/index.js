import Head from "next/head";
import Card from "../components/Card";
import "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sportrehabilitácó</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-screen bg-gray-900 bg-cover overflow-hidden z-50 absolute">
        <div className="flex h-16  shadow-md  absolute w-screen z-50 pt-1">
          <div className="w-4/5 pl-2">
            <h1 className="text-left text-xl text-white text-shadow-xl pl-7 pt-2">
              Mezriczky Melinda
            </h1>
            <h2 className="text-white italic">
              sportrehabilitácó és személyi edzés
            </h2>
          </div>
          <div className="flex">
            <div className="w-32 border-r-2 border-l-2 text-white border-green-500 nav-menu hover:text-green-500 hover:border-white  transition-all duration-200 cursor-pointer hover:bg-opacity-50 flex items-center justify-center">
              <span className=" ">Kezdőlap</span>
            </div>
            <div className="w-32 border-r-2 text-white border-green-500  nav-menu hover:text-green-500  hover:border-white  transition-all duration-200 cursor-pointer hover:bg-opacity-50  flex items-center justify-center">
              <span className="">Rólam</span>
            </div>
            <div className="w-32 border-r-2 text-white nav-menu border-green-500 hover:border-b-2 bord hover:text-green-500 hover:border-white transition-all duration-200 cursor-pointer hover:bg-opacity-50  flex items-center justify-center">
              <span className="fafa">Kapcsolat</span>
            </div>
          </div>
          {/*  <div className="w-auto flex flex-col text-white">
            <span>Mezriczky Melinda</span>
            <span>maximus0917@gmail.com</span>
          </div> */}
          {/* <div className="w-1/4">enu</div>
          <div className="w-1/4">fasdfa</div> */}
        </div>
        <div className="h-1 bg-green-500"></div>
        {/*         <div className="bg-gradient-to-r from from-green-500 to-blue-800 h-full w-full z-50 absolute bg-opacity-40"></div>
         */}
        <div className="w-full h-full  z-50">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover absolute z-10 h-full"
          >
            <source src="bgvid.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="h-full w-1 bg-gradient-to-b from-green-500 to-blue-400 absolute left-0 z-50"></div>
        <div className="h-full w-1 bg-gradient-to-b from-green-500 to-blue-400 absolute right-0 z-50"></div>
        <div className="w-full h-1 bg-blue-400 absolute bottom-0"></div>
      </div>
    </>
  );
}
