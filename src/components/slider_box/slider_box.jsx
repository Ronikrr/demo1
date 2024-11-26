
import React, { useEffect, useRef, useState } from "react";
import Award_2 from "../../assets/img/award-bg-new.svg";
import Award_1 from "../../assets/img/award-bg-mob-new.svg";
import Monkey_glass from "../../assets/img/award-monkey-glass.svg";
import Monkey from "../../assets/img/monkys1.svg";

import Award_imge1 from '../../assets/img/Awards-image1.png'
import Award_imge2 from '../../assets/img/Awards-image2.png'
import Award_imge3 from '../../assets/img/Awards-image3.png'
import Award_imge4 from '../../assets/img/Awards-image4.png'
import Award_imge5 from '../../assets/img/Awards-image5.png'
import Award_imge6 from '../../assets/img/Awards-image6.png'
import Award_imge7 from '../../assets/img/Awards-image7.png'
import Award_imge8 from '../../assets/img/Awards-image8.png'
import Award_imge9 from '../../assets/img/Awards-image9.png'
import Award_imge10 from '../../assets/img/Awards-image10.png'
import Award_imge11 from '../../assets/img/Awards-image11.png'
import man from '../../assets/img/award-man.svg'
import gsap from 'gsap';
import award_logo from '../../assets/img/Awards-Manipal-logo.png'
import man_glass from '../../assets/img/award-man-glass.svg'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "react-slick";
gsap.registerPlugin(ScrollTrigger);

const Slider_box = () => {
    const [currentindex, setcurrntindex] = useState(0)
    const manGlassRefs = useRef([]);
    const monkeyGlassRefs = useRef([]);
    // Track if the section is in view


    useEffect(() => {
        // Ensure manGlassRefs is an array and not undefined
        const revealManG = manGlassRefs.current;

        revealManG.forEach((text, i) => {
            ScrollTrigger.create({
                trigger: text,
                toggleClass: 'active',
                start: 'bottom 80%',
                // Uncomment and adjust `end` if necessary
                // end: 'top 30%',
                // marker: true
            });
        });

        return () => {
            // Cleanup ScrollTriggers on component unmount
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
    useEffect(() => {
        const revealMonkeyG = monkeyGlassRefs.current
        revealMonkeyG.forEach((text, i) => {
            ScrollTrigger.create({
                trigger: text,
                toggleClass: 'active',
                start: 'top 50%',

            })
        }
        );
        return () => {

            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    })
    const slide_data = [
        {
            id: 1,
            heading: "Nothing Short(y)  of Amazing!",
            src: Award_imge1,
            head_name: 'SHORTYS 23',
            dis_head: 'Audience Honour -',
            dis: 'Physical & Digital Convergence',
            logo: award_logo,
        }
        // , {
        //     id: 2,
        //     heading: "Nothing Short(y)  of Amazing!",
        //     src: Award_imge2,
        //     head_name: 'SHORTYS 23',
        //     dis_head: 'Audience Honour -',
        //     dis: 'Physical & Digital Convergence',
        //     logo: award_logo,
        // }
        // , {
        //     id: 3,
        //     heading: "Nothing Short(y)  of Amazing!",
        //     src: Award_imge3,
        //     head_name: 'SHORTYS 23',
        //     dis_head: 'Audience Honour -',
        //     dis: 'Physical & Digital Convergence',
        //     logo: award_logo,
        // }
        // , {
        //     id: 4,
        //     heading: "Nothing Short(y)  of Amazing!",
        //     src: Award_imge4,
        //     head_name: 'SHORTYS 23',
        //     dis_head: 'Audience Honour -',
        //     dis: 'Physical & Digital Convergence',
        //     logo: award_logo,
        // }
        // ,
        // {
        //     id: 5,
        //     heading: "Nothing Short(y)  of Amazing!",
        //     src: Award_imge5,
        //     head_name: 'SHORTYS 23',
        //     dis_head: 'Audience Honour -',
        //     dis: 'Physical & Digital Convergence',
        //     logo: award_logo,
        // }
        // , {
        //     id: 6,
        //     heading: "Nothing Short(y)  of Amazing!",
        //     src: Award_imge6,
        //     head_name: 'SHORTYS 23',
        //     dis_head: 'Audience Honour -',
        //     dis: 'Physical & Digital Convergence',
        //     logo: award_logo,
        // }
        // , {
        //     id: 7,
        //     heading: "Nothing Short(y)  of Amazing!",
        //     src: Award_imge7,
        //     head_name: 'SHORTYS 23',
        //     dis_head: 'Audience Honour -',
        //     dis: 'Physical & Digital Convergence',
        //     logo: award_logo,
        // }
        // , {
        //     id: 8,
        //     heading: "Nothing Short(y)  of Amazing!",
        //     src: Award_imge8,
        //     head_name: 'SHORTYS 23',
        //     dis_head: 'Audience Honour -',
        //     dis: 'Physical & Digital Convergence',
        //     logo: award_logo,
        // }
        // , {
        //     id: 9,
        //     heading: "Nothing Short(y)  of Amazing!",
        //     src: Award_imge9,
        //     head_name: 'SHORTYS 23',
        //     dis_head: 'Audience Honour -',
        //     dis: 'Physical & Digital Convergence',
        //     logo: award_logo,
        // }
        // , {
        //     id: 10,
        //     heading: "Nothing Short(y)  of Amazing!",
        //     src: Award_imge10,
        //     head_name: 'SHORTYS 23',
        //     dis_head: 'Audience Honour -',
        //     dis: 'Physical & Digital Convergence',
        //     logo: award_logo,
        // }
        // , {
        //     id: 11,
        //     heading: "Nothing Short(y)  of Amazing!",
        //     src: Award_imge11,
        //     head_name: 'SHORTYS 23',
        //     dis_head: 'Audience Honour -',
        //     dis: 'Physical & Digital Convergence',
        //     logo: award_logo,
        // }

    ]
    const CustomArrow = ({ className, style, onClick, icon }) => {
        const isMobile = window.innerWidth < 640;
        const buttonSize = isMobile ? "30px" : "40px";  // Adjust sizes as needed for different devices.
        const display = isMobile ? "block" : "none";    // Only display on mobile screens.

        return (
            <button
                className={className}
                style={{
                    ...style,
                    display: display,
                    background: "#f8d200",
                    border: "none",
                    borderRadius: "50%",
                    width: buttonSize,
                    height: buttonSize,
                    fontSize: buttonSize,
                    zIndex: 10,
                }}
                onClick={onClick}
            >
                <i className={icon}></i>
            </button>
        );
    };

    const DesktopArrow = ({ className, style, onClick, icon }) => {
        // Adjust `isDesktop` to better represent desktop and larger screens.
        const isDesktop = window.innerWidth >= 1024;  // Consider 1024px and above as desktop

        // Adjust button size and display based on the screen width
        const buttonSize = isDesktop ? "40px" : "30px"; // Larger button for desktop, smaller for mobile/tablet
        const display = isDesktop ? "block" : "none";   // Only show on desktop screens

        return (
            <button
                className={className}
                style={{
                    ...style,
                    display: display,
                    background: "#f8d200",
                    border: "none",
                    borderRadius: "50%",
                    width: buttonSize,
                    height: buttonSize,
                    fontSize: buttonSize,
                    zIndex: 10,
                }}
                onClick={onClick}
            >
                <i className={icon}></i>
            </button>
        );
    };


    const mobile = {
        arrows: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <CustomArrow icon="bi bi-arrow-left" />,
        nextArrow: <CustomArrow icon="bi bi-arrow-right" />,

    };
    const desktop = {
        arrows: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <DesktopArrow icon="bi bi-arrow-left" />,
        nextArrow: <DesktopArrow icon="bi bi-arrow-right" />,
    }

    return (
        <section id="slider-section " className="h-full relative md:pt-[100px] ">
            <div className="absolute imges_calss -z-10 w-[95%] lg:w-[100%] xl:w-[95%] top-[-15%] md:top-[15%] lg:top-[50%] left-[3%]  lg:left-[50%]  h-full cratives ">
                        <img src={Award_2} className="bg_box" alt="Award Background 2" />
                        <img src={Award_1} className="bg_box_thow" alt="Award Background 1" />
                    </div>
            <div className="container relative h-full mx-auto">
                <div className="flex flex-col items-center justify-center w-full h-full mx-auto ">
                    <div className="flex justify-center w-full lg:w-10/12"  >
                        <Slider {...desktop}>
                            {slide_data.map((slide) => (

                                <div className="flex w-full">
                                    <div className="flex flex-wrap w-full" key={slide.id} >
                                        <div key={slide.id} className="flex-row items-start justify-center w-full pt-10 pb-0 pl-10 pr-10 desktop_lenth">
                                            <div className="w-6/12">
                                                <div className=" pt-[10vw] pl-[50px] text-left h-full" >
                                                    <span className=" text-[2.8rem] font-extrabold text-[#030200]" > {slide.heading} </span>
                                                </div>
                                            </div>
                                            <div className="flex justify-center w-6/12">
                                                <div className="w-full">
                                                    <img src={slide.src} className="w-full h-full object-fit " alt="Nothing Short(y) <br /> of Amazing!" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="desktop_lenth flex-col box_data space-y-6 px-[100px] w-full pb-[100px] h-full">
                                            <div className="w-4/12">
                                                <span>{slide.head_name}</span>
                                            </div>
                                            <div className="w-4/12">
                                                <h6>{slide.dis_head}</h6>
                                                <span>{slide.dis}</span>
                                            </div>
                                            <div className="w-4/12">
                                                <img src={slide.logo} className="w-[100px]" alt="" />
                                            </div>
                                            <div className="w-4/12"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="flex justify-center w-[95%] " >

                        <Slider {...mobile}>
                            {slide_data.map((slide) => (

                                <>
                                    <div key={slide.id} className="flex-col items-center justify-center w-full md:pt-10 moblie_size ">
                                        <div className="w-full py-[25px]">
                                            <div className="h-full text-center" >
                                                <span className=" text-[1.2rem] font-extrabold text-[#030200]" > Nothing Short(y) <br /> of Amazing!</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-center pb-[70px] w-full ">
                                            <div className="flex justify-center w-full">
                                                <img src={Award_imge8} className="object-cover w-6/12 h-6/12 aspect-square" alt="Nothing Short(y) <br /> of Amazing!" />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </Slider>
                    </div>

                </div>
                <div className="absolute monky w-[30vw] md:w-[17vw]  lg:w-[17vw] md:top-[5%] top-[-15%] lg:top-[0] left-[-1.8vw] md:left-[-5vw]  lg:left-[0.5vw] z-10">
                    <img src={Monkey} className="w-full " alt="Monkey Image" ref={el => monkeyGlassRefs.current[0] = el} />
                    <img
                        src={Monkey_glass}
                        ref={el => manGlassRefs.current[1] = el}
                        className="absolute w-[21%] monky active top-[27%] left-[30.5%] translate-y-0"
                        alt="Monkey Glass"
                    />
                </div>
                <div className="absolute man_glass w-[30.1vw] md:w-[17vw] lg:w-[17vw] bottom-[-8.2vw] md:bottom-[6.0vw] lg:bottom-[2.35vw] right-0 md:right-[-3.5vw] lg:right-[0.5vw] z-10">
                    <img src={man} className="w-full" alt="Monkey Image" ref={el => manGlassRefs.current[0] = el} />
                    <img
                        src={man_glass}
                        ref={el => manGlassRefs.current[1] = el}
                        className="absolute w-[40%] man_glass active bottom-[62%] right-[15%] translate-y-0"
                        alt="Monkey Glass"
                    />
                </div>

            </div>
        </section>
    );
};

export default Slider_box;
