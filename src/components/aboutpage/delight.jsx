import React from 'react'
import img_1 from '../../assets/img/about/customer-delight-icon-1.png'
import img_2 from '../../assets/img/about/customer-delight-icon-2.png'
import img_3 from '../../assets/img/about/customer-delight-icon-3.png'
import img_4 from '../../assets/img/about/customer-delight-icon-4.png'
import bg_img from '../../assets/img/about/bg-paint.svg'

const slidedelight = [
    {
        id: 1,
        src: img_1,
        dis: "We help you share your ideas with the world.",
    },
    {
        id: 2,
        src: img_2,
        dis: "We give you the resources best suited for your brand."
    },
    {
        id: 3,
        src: img_3,
        dis: "We anticipate your needs better than you can."
    },
    {
        id: 4,
        src: img_4,
        dis: "We make a mean cup of tea and our coffee is “mwah”"
    }
]
const Delight = () => {
    return (
        <section className='py-5 px-[15px] text-black' >
            <div className="container mx-auto">
                <div className="flex flex-row-reverse items-center flex-col justify-center py-[5rem]">
                    <div className="w-full text-center md:w-[62.88%] pb-[3rem] px-[15px]">
                        <div className="title_wrap">
                            <span className='text-[32px] md:text-[60px] font-bold' >Customer Delight
                            </span>
                        </div>
                        <div className="text-center wrap md:pl-[1rem] relative ">
                            <p className='py-[1rem] text-[24px] font-extrabold' >We make the customers orgasm when we lay out our ideas and creatives in front of them.</p>
                            <p className='py-[1rem] text-[18px]  ' >At Social Panga, we are driven by a strong innate desire to delight the customer to an <br />extent that they want to give us virtual hugs.</p>
                            <p className='py-[1rem] text-[18px] ' >BTW, we live for occasional fatty foods, intoxicating liquids, and jalebis (yes, we’re a <br />bunch of nice kids!)</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-col md:flex-row w-full md:w-[1140px] space-x-0 md:space-x-2 text-center">
                        {slidedelight.map((item, i) => (
                            <div key={i} className="w-full mb-[0.5rem] md:w-3/12 p-[1rem] m-0 md:m-[0.1rem] flex flex-col items-center justify-center h-full aspect-square bg-[#d7d7d7] ">
                                <img src={item.src} className='h-[155px] object-contain aspect-square w-full' alt="" />
                                <h3 className='text-[16px] leading-2 font-semibold pt-[1rem] mb-[.5rem]' > {item.dis} </h3>
                            </div>
                        ))}
                    </div>
                    <div className="flex relative items-center pt-[3rem] justify-center flex-col md:flex-row w-full md:w-[1140px] space-x-0 md:space-x-2 text-center">
                        <img src={bg_img} className='absolute top-[50%x`] md:top-[25%] w-6/12 -z-10' alt="" />
                        <div className="">
                            <span className='text-[20px] md:text-[44px] z-10 font-extrabold' > Redefining Rules, <br /> without breaking them.</span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Delight