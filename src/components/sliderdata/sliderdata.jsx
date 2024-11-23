import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sliderdata = () => {
    const [currentslide, setcurrentsilde] = useState(0);
    const [activeindex, setactiveindeax] = useState(null);

    const slides = [
        {
            text: "kitkat",
            image: "https://socialpanga.com/wp-content/uploads/2024/03/KITKAT.png",
            images:
                "https://socialpanga.com/wp-content/uploads/2024/03/Kitkat-Thumbnail-1.jpeg",
        },
        {
            text: "manipal hispital",
            image: "https://socialpanga.com/wp-content/uploads/2021/07/Juski_UI.jpg",
            images: "https://socialpanga.com/wp-content/uploads/2021/07/manipal.png",
        },
        {
            text: "lifestyle",
            image:
                "https://socialpanga.com/wp-content/uploads/2021/04/SP-website-design-project-0328.png",
            images:
                "https://socialpanga.com/wp-content/uploads/2020/12/SP-HomePage-Design-Images-11.jpg",
        },
        {
            text: "bengaluru airport",
            image:
                "https://socialpanga.com/wp-content/uploads/2021/04/SP-website-design-project-0338.png",
            images:
                "https://socialpanga.com/wp-content/uploads/2021/04/bengaluru.png",
        },
        {
            text: "mamaearth",
            image:
                "https://socialpanga.com/wp-content/uploads/2021/07/SP_Shoot-thumbnail-03-1.png",
            images:
                "https://socialpanga.com/wp-content/uploads/2021/07/MamaEarth_LeftSide-1.jpg",
        },
        {
            text: "tata health",
            image: "https://socialpanga.com/wp-content/uploads/2021/08/05.png",
            images: "https://socialpanga.com/wp-content/uploads/2021/08/tint.png",
        },
        {
            text: "pepperfry",
            image:
                "https://socialpanga.com/wp-content/uploads/2021/06/Pepperfry_CaseStudy.png",
            images:
                "https://socialpanga.com/wp-content/uploads/2021/04/SP-HomePage-Design-Images-09.jpg",
        },
        {
            text: "curefit",
            image:
                "https://socialpanga.com/wp-content/uploads/2021/06/SP-website-design-project-0337.png",
            images:
                "https://socialpanga.com/wp-content/uploads/2021/02/cult-featured-large.jpg",
        },
    ];
    const handletextclick = (index) => {
        setcurrentsilde(index);
        setactiveindeax(index === activeindex ? null : index);
    };
    return (
        <section className="slidertext">
            <div className="flex flex-wrap items-center w-full h-full">
                <div className="flex flex-col items-center justify-center h-full w-full md:w-6/12 py-[35px] md:py-[100px] px-[50px]  md:px-[180px] relative ">
                    <img
                        src={slides[currentslide].images}
                        className="absolute z-0 object-cover w-full h-full opacity-100 aspect-square "
                        alt=""
                    />
                    <div className="bg-[#00000080] absolute z-10 w-full h-full"></div>
                    {slides.map((slide, index) => (
                        <Link
                            key={index}
                            onClick={() => handletextclick(index)}
                            className={`slider-text text-stroke uppercase cursor-pointer text-[36px] text-[#fff] font-extrabold w-full text-center rounded-sm z-40 
            ${activeindex === index ? "active" : ""}`}
                        >
                            {slide.text}
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center w-full md:w-6/12">
                    <div className="head py-[35px] md:py-[90px] px-[50px]  md:px-[180px">
                        <div className="text-center head_text">
                            <span className="text-center text-[32px] font-bold leading-3 text-[#f8d200] uppercase">
                                {slides[currentslide].text}
                            </span>
                        </div>
                        <img
                            src={slides[currentslide].image}
                            className=" w-full h-full md:h-[400px] block mt-[20px]"
                            alt={slides[currentslide].text}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sliderdata;
