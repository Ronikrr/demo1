import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='footer bg-[#f8d200] pt-[48px]  py-[16px]' >
            <div className="container mx-auto">
                <div className="flex justify-center w-full">
                    <div className="w-full text-center xl:w-[1140px]  ">
                        <div className="w-full flex-wrap flex pb-[20px] px-[20px] md:px-[0px] ">
                            <div className="w-full pt-3 lg:w-6/12">
                                <div className="flex flex-wrap items-center w-full imgbox ">
                                    <div className="w-5/12 imgs">
                                        <img src="https://socialpanga.com/wp-content/uploads/2020/10/footer-img.png" className='object-fill w-full h-full' alt="" />
                                    </div>
                                    <div className="w-6/12 text-left dis md:text-left">
                                        <div className="w-full md:w-7/12 text-[18px] ">

                                            <span>Congratulations for traveling from start to the end of this page! We’ll add 10,000 steps to your fitness tracker! <br /> 🙂</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-6/12 pt-3 text-left lg:w-2/12 ">
                                <ul className='*:text-[18px] *:mb-[20px] *:font-extrabold *:capitalize  ' >
                                    <li className="">
                                        <Link className="1">about us</Link>
                                    </li>
                                    <li className="">
                                        <Link className="2">services</Link>
                                    </li>
                                    <li className="">
                                        <Link className="3">our work</Link>
                                    </li>
                                    <li className="">
                                        <Link className="4">client</Link>
                                    </li>
                                    <li className="">
                                        <Link className="5">our team</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-6/12 pt-3 text-left lg:w-2/12 ">
                                <ul className='*:text-[18px] *:mb-[20px] *:font-extrabold *:capitalize  ' >
                                    <li className="">
                                        <Link className="1">awards</Link>
                                    </li>
                                    <li className="">
                                        <Link className="2">carrer</Link>
                                    </li>
                                    <li className="">
                                        <Link className="3">contact us</Link>
                                    </li>
                                    <li className="">
                                        <Link className="4">privarcy poilcy</Link>
                                    </li>
                                  
                                </ul>
                            </div>
                            <div className="w-full pt-3 text-right md:w-2/12 ">
                                <ul className='text-[18px] mb-[20px] font-extrabold capitalize flex flex-row justify-center  md:justify-end lg:flex-col ' >
                                    <li className="">
                                        <Link className="flex justify-center md:justify-end ">
                                            <img src="https://socialpanga.com/wp-content/themes/socialpanga/assets/images/icons/instagram-icon.png" className='w-16' alt="" />
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link className="flex justify-center md:justify-end ">
                                            <img src="https://socialpanga.com/wp-content/uploads/2024/03/X-logo.png" className='w-16' alt="" />
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link className="flex justify-center md:justify-end ">
                                            <img src="https://socialpanga.com/wp-content/themes/socialpanga/assets/images/icons/facebook-icon.png" className='w-16' alt="" />
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link className="flex justify-center md:justify-end ">
                                            <img src="https://socialpanga.com/wp-content/themes/socialpanga/assets/images/icons/linkedIn-icon.png" className='w-16' alt="" />
                                        </Link>
                                    </li>

                                </ul>
                            </div>

                        </div>
                        <div className="w-full text-left dis lg:text-left px-[20px] md:px-[20px] ">
                            <span>Social Panga is an integrated social media and digital marketing agency in Bangalore, Mumbai, Delhi, and Dubai. With a team of over 350+ Mafias, we are an award winning full stack digital marketing agency in India offering creative and innovative solutions for brands looking to grow their businesses online. If you are reading this, then you’re on the right site to onboard one of the best creative marketing agency in India.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer