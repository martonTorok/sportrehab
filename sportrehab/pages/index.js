import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sportrehabilitácó</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-screen bg-gray-900 bg-cover overflow-hidden z-50 absolute">
        <nav>
          <div className="flex h-24 bg-transparent shadow-md pt-6 absolute w-screen">
            <div className="w-4/5">
              <h1 className="text-left text-5xl text-white text-shadow-xl pl-5">
                Sportrehabilitáció | Személyi edzés
              </h1>
            </div>
            <div className="w-auto flex flex-col text-white  border-b-2 border-t-2 border-green-500">
              <span>Mezriczky Melinda</span>
              <span>maximus0917@gmail.com</span>
            </div>
            {/* <div className="w-1/4">enu</div>
          <div className="w-1/4">fasdfa</div> */}
          </div>
          <div className="h-1 bg-green-500"></div>
        </nav>
        <main>
          <div className="w-100 h-full bg-gradient-to-r from-transparent to-red-500 z-50">
            <video
              autoPlay
              muted
              loop
              playsinline
              className="object-cover absolute z-10"
            >
              <source src="bgvid.mp4" type="video/mp4" />
            </video>
          </div>
        </main>
        <div className="h-full w-1 bg-gradient-to-b from-green-500 to-blue-400 absolute left-0 z-50"></div>
        <div className="h-full w-1 bg-gradient-to-b from-green-500 to-blue-400 absolute right-0 z-50"></div>

        <div className="w-full h-1 bg-blue-400 absolute bottom-0"></div>
      </div>
    </>
  );
}
