import React from 'react';
import footer1 from '../../assets/icons/footer1.png'
import footer2 from '../../assets/icons/footer2.png'
import footer3 from '../../assets/icons/footer3.png'
import x from '../../assets/icons/x.png'
import robot from '../../assets/icons/robot.png'
import telegram from '../../assets/icons/telegram.png'

const Footer = () => {
    return (
        <div className='bg-[#0178BA]  flex justify-center items-center pb-5 mt-0 lg:mt-[-1rem]'>
            <div className=' className="lg:w-[80%] w-[90%] lg:px-10  rounded-3xl bg-white border-b-2 border-r-2 border-gray-300 shadow-[4px_4px_8px_rgba(0,0,0,0.3)]' >
                <h1 className='text-center py-10 lg:text-6xl text-2xl text-[#0178BA]' style={{fontFamily:'Kavoon'}}>Join The CHONK CHILHUAHUA</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 pb-3 '>
                    <div className='justify-center items-center flex'>
                        <img src={footer1} className='h-[150px] w-[100px]' />
                    </div>
                    <div className='justify-center items-center flex flex-col lg:my-0 my-6'>
                        <img src={footer2} className='h-[150px] w-[100px]' />
                        <div className='flex gap-5 mt-3'>
                            <img src={telegram} className='h-[30px] w-[30px]' />
                            <img src={x} className='h-[30px] w-[30px]' />
                            <img src={robot} className='h-[30px] w-[30px]' />
                        </div>

                    </div>
                    <div className='justify-center items-center flex'>
                        <img src={footer3} className='h-[150px] w-[100px]' />
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default Footer;