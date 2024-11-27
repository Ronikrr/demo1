import React from "react";
import slider_1 from '../../assets/img/awards/1-1.jpg'
import slider_2 from '../../assets/img/awards/2-1.jpg'
import slider_3 from '../../assets/img/awards/3-1.jpg'
import slider_4 from '../../assets/img/awards/4-1.jpg'
import slider_5 from '../../assets/img/awards/5-1.jpg'
import Slider from "react-slick";

// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderdata = [
    {
        id: 1,
        src: slider_1,
        name: "awards1",
    }, {
        id: 2,
        src: slider_2,
        name: "awards2",
    }, {
        id: 3,
        src: slider_3,
        name: "awards3",
    }, {
        id: 4,
        src: slider_4,
        name: "awards4",
    }, {
        id: 5,
        src: slider_5,
        name: "awards5",
    },
];

const Slider_box = () => {

    const mobile = {
        arrows: true, // Show arrows for navigation
        dots: true, // Show dots for navigation
        infinite: true, // Enable infinite scroll
        speed: 500,
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Speed of autoplay
        vertical: false, // Horizontal slider
    };

    return (
        <div className="flex justify-center w-full">
            <Slider {...mobile}>
                {sliderdata.map((item, id) => (
                    <div key={id}>
                        <img
                            src={item.src}
                            className="object-cover w-full h-full"
                            alt={item.name}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Slider_box;
