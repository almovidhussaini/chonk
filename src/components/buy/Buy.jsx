import React from "react";
import buydog1 from "../../assets/icons/buydog1.png";
import buydog2 from "../../assets/icons/buydog2.png";
import buycard from "../../assets/icons/buycard.png";

const Buy = () => {
  return (
    <div className="bg-[#0178BA] " id="roadmap">
      <h1
        style={{ fontFamily: "Kavoon" }}
        className="text-white text-6xl text-center pt-40 "
      >
        HOW TO BUY?
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-3 lg:p-20 p-5">
        <div className="relative flex justify-center">
          <img
            src={buycard}
            className="lg:w-[400px] h-[400px] w-[800px] "
            alt="Buy Card"
          />
          <img src={buydog1} className="h-[300px] w-[300px] absolute top-[-18rem] hidden lg:block " />

          <h1 className="absolute top-[6rem] 2xl:left-[6rem] lg:left-[4rem] left-8 z-10 text-xl ">
            Step 1: Connect your wallet
          </h1>

          <p className="absolute top-[10rem] 2xl:left-[6rem] lg:left-[4rem] left-16 z-10 lg:w-[300px] w-[200px] md:w-[200px] text-xl">
            Link your crypto wallet (like MetaMask or Trust Wallet) to get
            started securely
          </p>
        </div>
        <div className="relative flex justify-center lg:my-0  my-7">
          <img
            src={buycard}
            className="lg:w-[400px] h-[400px] w-[600px] "
            alt="Buy Card"
          />

          <h1 className="absolute top-[6rem] 2xl:left-[6rem] lg:left-[4rem] left-8 z-10 text-xl ">
            Step 1: Connect your wallet
          </h1>

          <p className="absolute top-[10rem] 2xl:left-[6rem] lg:left-[4rem] left-14 z-10 lg:w-[300px] w-[200px] text-xl">
            Link your crypto wallet (like MetaMask or Trust Wallet) to get
            started securely
          </p>
        </div>
        <div className="relative flex justify-center">
          <img
            src={buycard}
            className="lg:w-[400px] h-[400px] w-[600px] "
            alt="Buy Card"
          />
          <img src={buydog2} className="h-[300px] w-[300px] absolute top-[-18rem] hidden lg:block " />

          <h1 className="absolute top-[6rem] 2xl:left-[6rem] lg:left-[4rem] left-8 z-10 text-xl ">
            Step 1: Connect your wallet
          </h1>

          <p className="absolute top-[10rem] 2xl:left-[6rem] lg:left-[4rem] left-11 z-10 lg:w-[300px] w-[200px] text-xl">
            Link your crypto wallet (like MetaMask or Trust Wallet) to get
            started securely
          </p>
        </div>
      </div>
    </div>
  );
};

export default Buy;
