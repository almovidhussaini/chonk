import React from 'react';
import aboutdog from '../../assets/icons/aboutdog.png';

const About = () => {
    return (
        <div className='flex flex-col lg:mb-[10rem]' id='about'>
            <h1 style={{fontFamily:'Kavoon',WebkitTextStroke: '2px #0178BA',}} className='text-white text-center my-10  text-[30px] lg:text-[150px] ' >ABOUT CHONK</h1>
            <div className='grid grid-cols-1 xl:grid-cols-2 px-4 lg:px-28 relative'>
                <div className='flex justify-end lg:mt-[5rem] lg:pl-[10rem] '>
                    <p className='text-xl ' style={{ fontFamily: "Kdam Thmor Pro" }}>
                    CHONK CHIHUAHUA isn’t just a meme token it’s a movement! Inspired by the adorable, chunky charm of our favorite tiny but mighty companion, this token combines the hilarity of meme culture with the boundless potential of blockchain technology.
                    </p>
                </div>
                <div className=' relative lg:absolute  lg:right-[20rem] xl:right-[15rem] 2xl:right-[20rem] lg:top-[-10rem] top-[-5rem] '>
                    <img src={aboutdog} className='h-[500px] w-[600]  ' />
                </div>

            </div>
        </div>
    );
};

export default About;