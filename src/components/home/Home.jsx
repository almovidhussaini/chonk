import React from "react";
import maindog from "../../assets/icons/maindog.png";

const Home = () => {
  return (
    <div className="bg-[#0178BA]">
      <div className="grid grid-cols-1 lg:grid-cols-2 p-5 md:p-20 ">
        <div className="  mt-[6rem] justify-end items-end lg:pl-[7rem]">
          <h1 style={{ fontFamily: "Kavoon" }} className="text-white text-4xl md:text-8xl">
            CHONK CHIHUAHUA
          </h1>
          <p
            className="text-white mt-10"
            style={{ fontFamily: "Kdam Thmor Pro" }}
          >
            Welcome to CHONK CHIHUAHUA - the ultimate meme token inspired by the
            chunky charm and playful spirit of everyone's favorite pint-sized
            pup! Build for the community, driven by fun, and packed with endless
            potential, CHONK CHIHUAHUA is more than just a token-it's a
            revolutuin in meme culture and crypto innovation, Whether you're
            here for the laughs, the gains, or to join a growing pack of lotal
            holders, this is your chance to be part of something truly
            legendary.
          </p>
          <button
            className="mt-10 bg-[white] px-8 py-4 rounded-3xl text-[#0178BA]"
            style={{ fontFamily: "Kavoon" }}
          >
            BUY TOKEN
          </button>
        </div>
        <div className="relative flex flex-col justify-end items-end lg:justify-start lg:items-start">
          <img src={maindog} className="w-[500px] h-[600px] lg:ml-[10rem]" />
          <div className="bg-white flex p-2 md:p-4 md:w-[25rem] md:absolute md:top-[550px]  md:left-16 rounded-2xl justify-center items-center">
            <p>jhd67dyuwe784fd78rr5rfhg5vuigb78v</p>
            <button className="bg-[#0178BA] ml-[2px] md:ml-[2rem] px-4 py-2 rounded-xl text-white"> Copy</button>
          </div>
        </div>
      </div>

      {/* <div className='grid grid-cols-1'>
                <div className='bg-white'>
                    <p>jhd67dyuwe784fd78rr5rfhg5vuigb78v</p>
                    <button className='bg-[#0178BA]'> Copy</button>

                </div>

            </div> */}
    </div>
  );
};

export default Home;
