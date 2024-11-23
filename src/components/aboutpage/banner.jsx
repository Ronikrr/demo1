import React, { useState } from 'react'
import img_1 from '../../assets/img/about/about-banner-spacing-1.png'
import speaker from '../../assets/img/about/speaker.svg'
const Banner = () => {
    const [isaudioplaying, setaudiopaling] = useState(false);
    const togglemafiyaSound = () => {
        setaudiopaling(!isaudioplaying)
    }
    return (
        <section className='bg-[#f8d200] pb-[200px] lg:pb-[400px] relative' >
            <img src={img_1} className='absolute bottom-0 left-0 right-0 z-0 w-full' alt="" />
            <div className="container mx-auto text-black">
                <div className="relative z-10 py-[1.5rem]">
                    <div className="text-center page_title">
                        <div onClick={togglemafiyaSound} className="relative flex items-center justify-center cursor-pointer icon_with_audio">
                            <img src={speaker} className='h-[48px] ' alt="" />
                            <div className={`inline-block relative ${isaudioplaying ? 'opacity-100' : 'opacity-0'} `}>
                                <div className="block w-full h-full text-[6px] absolute bottom-0 left-0 border-r-[1em]  border-[#030200] rounded-r-full spikervay  first"></div>
                                <div className="block w-[5em] h-[5em] text-[6px] absolute bottom-[-14px] left-0 border-r-[1em]  border-[#030200] rounded-r-full spikervay  second"></div>
                                <div className="block w-[3em] h-[3em] text-[6px] absolute bottom-[-8px] left-0 border-r-[1em]  border-[#030200] rounded-r-full spikervay  third"></div>
                                <div className="block w-[1em] h-[1em] text-[6px] absolute bottom-[-1px] left-0 border-r-[1em]  border-[#030200] rounded-r-full spikervay  fourth"></div>
                            </div>
                        </div>
                        <div className="title">
                            <span className='text-[32px] md:text-[60px] font-bold' >Mafia</span>
                        </div>
                        <div className="subtitle pb-[1.4rem]">
                            <span className="font-semibold text-[18px] ">/ˈmæf.i.ə/</span>
                        </div>
                    </div>
                    <div className="w-full mx-auto text-center md:w-10/12 lg:w-6/12">
                        <span className='font-semibold text-[18px]' >The quintessential villain who brings out the best in the hero and is the sole reason for his existence – the Joker to Batman, the Gabbar Singh to Thakur,<br /> the Darth Vader to Luke Skywalker. These are the guys and girls whose <br /> punchlines and schemes are remembered forever.</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner