import React from "react";
import tokenleft from '../../assets/icons/tokenleft.png'
import tokenright from '../../assets/icons/tokenright.png'

const Tokenomics = () => {
  return (
    <div className="bg-[#05F3DC] lg:pb-[10rem] relative" id="tokenomics">
      <h1 className="text-center py-14 text-white text-4xl lg:text-8xl" style={{fontFamily:'Kavoon'}}>Tokenomics</h1>
      <img src={tokenleft} className="h-[300px] w-[200px] absolute top-[-2rem] 2xl:left-[24rem] lg:left-[15rem] hidden lg:block" />
      <img src={tokenright} className="h-[300px] w-[200px] absolute top-[-2rem]  2xl:right-[22rem]  lg:right-[13rem] hidden lg:block " />
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-[10rem]">
        <div className="flex flex-col gap-10  items-center lg:items-end" >
          <div className="bg-[#ECED30] p-4 w-[20rem] rounded-3xl relative">
            
            <p>Name</p>
            <h1 className="text-end" style={{fontFamily:'Kavoon'}}>CHONK CHILHUAHUA</h1>
          </div>
          <div className="bg-[#ECED30] p-4 w-[20rem] rounded-3xl">
            <p>Blockchain</p>
            <h1 className="text-end" style={{fontFamily:'Kavoon'}}>Solana</h1>
          </div>
        </div>
        <div className="flex flex-col gap-10  items-center lg:items-start lg:mx-10 mt-10 lg:mt-0  lg:mb-0 mb-20" >
          <div className="bg-[#ECED30] p-4 w-[20rem] rounded-3xl">
            <p>Ticker</p>
            <h1 className="text-end" style={{fontFamily:'Kavoon'}}>CHONK</h1>
          </div>
          <div className="bg-[#ECED30] p-4 w-[20rem] rounded-3xl">
            <p>Supply</p>
            <h1 className="text-end" style={{fontFamily:'Kavoon'}}>1 Billion</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
