import React from 'react'
import bg_img from '../../assets/img/two-paperplane.png'
import bg_im2 from '../../assets/img/single-paperplane.png'
import box_img_1 from '../../assets/img/infoxbox-ico1.png'
import box_img_2 from '../../assets/img/infoxbox-ico2.png'
import box_img_3 from '../../assets/img/infoxbox-ico3.png'
import { Link } from 'react-router-dom'
const Localsection = () => {
    return (
        <section className='relative py-5 paperpaln' >
            <img src={bg_img} className='w-full' alt="" />

            <div className="container flex justify-center mx-auto ">
                <div className="pt-[18px] pb-[54px] px-0 flex flex-wrap w-full lg:w-[1140px]">
                    <Link to='' className="w-full p-3 md:w-4/12">
                        <div className="bg-[#c32126] rounded-tl-[50px] ">
                            <div className="relative h-[500px] mb-[50%] pb-[1rem] px-[1.5rem] pt-[3rem] items-end justify-end flex-nowrap flex flex-col-reverse">
                                <div className="absolute right-[-90px] top-[-5%] left-[50%] h-[75%] md:right-[-50%] text-left mb-[60%] box_absolute ">
                                    <img src={box_img_1} className='object-cover w-full h-full ' alt="" />
                                </div>
                                <div className="pb-[10px]">
                                    <div className="font-bold text-white text-[15px] md:text-[24px]">
                                        <span>Looking to become the next big name everyone’s talking about?</span>
                                    </div>
                                    <div className="text-[20px] leading-2 pb-[5px] font-light text-white">Request a proposal.</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to='' className="w-full p-3 md:w-4/12">
                        <div className="bg-[#0573b6] rounded-tl-[50px] ">
                            <div className="relative h-[500px] mb-[50%] pb-[1rem] px-[1.5rem] pt-[3rem] items-end justify-end flex-nowrap flex flex-col-reverse">
                                <div className="absolute right-[-90px] top-[-5%] left-[50%] h-[75%] md:right-[-50%] text-left mb-[60%] box_absolute ">
                                    <img src={box_img_2} className='w-full' alt="" />
                                </div>
                                <div className="pb-[10px]">
                                    <div className="font-bold text-white text-[15px] md:text-[24px]">
                                        <span>Fear of missing out on the chance to do your life’s greatest work?</span>
                                    </div>
                                    <div className="text-[20px] leading-2 pb-[5px] font-light text-white">Join our team of Mafias.</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to='' className="w-full p-3 md:w-4/12">
                        <div className="bg-[#5f2a7c] rounded-tl-[50px] ">
                            <div className="relative h-[500px] mb-[50%] pb-[1rem] px-[1.5rem] pt-[3rem] items-end justify-end flex-nowrap flex flex-col-reverse">
                                <div className="absolute right-[-90px] top-[-5%] left-[50%] h-[75%] md:right-[-50%] text-left mb-[60%] box_absolute ">
                                    <img src={box_img_3} className='w-full' alt="" />
                                </div>
                                <div className="pb-[10px]">
                                    <div className="font-bold text-white text-[15px] md:text-[24px]">
                                        <span>Excited about the wonderful world of digital storytelling? </span>
                                    </div>
                                    <div className="text-[20px] leading-2 pb-[5px] font-light text-white">Sign up for our newsletter.</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <img src={bg_im2} className='w-[66vw] absolute -z-10 right-0 bottom-[90px]' alt="" />


        </section>
    )
}

export default Localsection