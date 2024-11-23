import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import './slider.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import 'swiper/swiper-bundle.min.css';

// Import Swiper core and required modules


const Connect = () => {
   
    return (
        <section className='py-5 px-[15px] text-black' >
            <div className="container mx-auto">
                <div className="flex flex-row-reverse items-center justify-center py-[5rem]">
                    <div className="w-full text-center md:w-[62.88%] pb-[3rem] px-[15px]">
                        <div className="title_wrap">
                            <span className='text-[32px] md:text-[60px] font-bold' >Plan, Create and Connect.</span>
                        </div>
                        <div className="text-center wrap pl-[1rem] relative ">
                            <p className='py-[1rem] text-[18px] font-semibold' >We are an award-winning creative marketing and advertising agency. We ideate, curate and execute marketing strategies to engage with our clients’ intended audience, all while integrating their brand with the digital world.</p>
                            <p className='py-[1rem] text-[18px] font-semibold' >We take thoughts for ideas and create remarkable moments. We are always well prepared – with a bunch of crazy people, endless cups of chai and beautiful hideouts in Bengaluru, Delhi and Mumbai.</p>
                            <Link className='absolute right-[-2%] bottom-[-100px] z-0 bg-[#f8d200] border border-[#f8d200] text-black rounded-full p-[22.5px] flex items-center justify-center box_button' >
                                <img src="https://socialpanga.com/wp-content/themes/socialpanga/assets/images/svg-icons/arrow-right.svg" className='w-[42px]' alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full px-0 pt-[3rem]">
                    <div className="w-full outline-none into_gallary">
                        <div className="h-[450px] w-full touch-auto overflow-x-hidden">
                            

                         
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Connect