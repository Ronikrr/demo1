import React from 'react'
import Awards_img from '../../assets/img/awards/main-awards-banner-img-1.jpg'

const Awardssection = () => {
    return (
        <section className="relative award_section">
            <img src={Awards_img} className='w-full h-auto' alt="" />
            <div className="absolute top-0 w-full h-full">
                <div className="lg:px-[3rem]">
                    <div className="flex flex-wrap">
                        <div className="w-6/12 text-left ">
                            <div className="text-left">
                                <h1 h1 className="pt-[30px] md:pt-[70px] data_cla text-[.9rem] pl-[1rem] md:text-[3.5rem] leading-none font-extrabold">
                                    We don't leave
                                    <br />
                                    ideas on the shelf,
                                    <br />
                                    just awards.
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Awardssection