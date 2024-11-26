import React, { useState } from "react";
import branding_1 from "../../assets/img/ourwork/branding/SP-website-design-project-031.png";
import branding_2 from "../../assets/img/ourwork/branding/SP-website-design-project-0310.png";
import branding_3 from "../../assets/img/ourwork/branding/SP-website-design-project-0311.png";
import branding_4 from "../../assets/img/ourwork/branding/SP-website-design-project-0312.png";
import branding_5 from "../../assets/img/ourwork/branding/SP-website-design-project-0313.png";
import branding_6 from "../../assets/img/ourwork/branding/SP-website-design-project-0314.png";
import branding_7 from "../../assets/img/ourwork/branding/SP-website-design-project-0315.png";
import branding_8 from "../../assets/img/ourwork/branding/SP-website-design-project-0316.png";
import branding_9 from "../../assets/img/ourwork/branding/SP-website-design-project-032.png";
import branding_10 from "../../assets/img/ourwork/branding/SP-website-design-project-033.png";
import branding_11 from "../../assets/img/ourwork/branding/SP-website-design-project-034.png";
import branding_12 from "../../assets/img/ourwork/branding/SP-website-design-project-035.png";
import branding_13 from "../../assets/img/ourwork/branding/SP-website-design-project-036.png";
import branding_14 from "../../assets/img/ourwork/branding/SP-website-design-project-037.png";
import branding_15 from "../../assets/img/ourwork/branding/SP-website-design-project-038.png";
import branding_16 from "../../assets/img/ourwork/branding/SP-website-design-project-038.png";
const Ourworkapge = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Function to filter images based on selected category
    const filterImages = (category) => {
        if (category === "all") return images;
        return images.filter((image) => image.category === category);
    };

    // Handle category change
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };
    // Sample images data
    const images = [
        { id: 1, src: branding_1, category: "branding" },
        { id: 2, src: branding_2, category: "branding" },
        { id: 3, src: branding_3, category: "branding" },
        { id: 4, src: branding_4, category: "branding" },
        { id: 5, src: branding_5, category: "branding" },
        { id: 6, src: branding_6, category: "branding" },
        { id: 1, src: branding_7, category: "branding" },
        { id: 2, src: branding_8, category: "branding" },
        { id: 3, src: branding_9, category: "branding" },
        { id: 4, src: branding_10, category: "branding" },
        { id: 5, src: branding_11, category: "branding" },
        { id: 6, src: branding_12, category: "branding" },
        { id: 3, src: branding_13, category: "branding" },
        { id: 4, src: branding_14, category: "branding" },
        { id: 5, src: branding_15, category: "branding" },
        { id: 6, src: branding_16, category: "branding" },
    ];
    return (
        <div className="pt-[105px] data_cla">
            <div className="container mx-auto lg:max-w-[71.25rem] pt-[1.5rem] pb-[1rem]">
                <div className="w-full lg:w-[1140px] pb-[1rem] px-[1rem] mx-auto flex flex-wrap items-center">
                    <div className="flex items-center flex-col md:flex-row md:pt-[1rem] p-0 md:px-[1rem] w-full">
                        <div className="w-full text-center md:text-left  md:w-6/12 pt-[1rem]">
                            <h1 className="text-[30px] lg:text-[60px] capitalize leading-[1.2] font-extrabold">
                                {" "}
                                Our Brand <br />
                                Raids{" "}
                            </h1>
                        </div>
                        <div className="w-full text-center md:text-left  md:w-6/12 pt-[1rem]">
                            <p className="text-[18px]">
                                The Mafias love to talk about their conquests over a freshly
                                brewed pitcher of beer. Client satisfaction is significant to
                                them, as they strive for nothing short of creative excellence.
                                Here are a few smart goals that were set and smashed
                                successfully.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mx-auto ">
                <div className="gallery-container">
                    {/* Filter Buttons */}
                    <div className="container mx-auto">
                        <div className="block text-center mb-[40px] mt-[20px] px-[32px] cursor-pointer">
                            <button
                                className="group  px-[7px] font-bold uppercase text-[20px]"
                                onClick={() => handleCategoryChange("all")}
                            >
                                <span className="after:w-0 group-hover:after:w-full super_font" > All</span>
                            </button>
                            <button
                                className="group  px-[7px] font-bold uppercase text-[20px]"
                                onClick={() => handleCategoryChange("branding")}
                            >
                                <span className="after:w-0 group-hover:after:w-full super_font" > branding</span>
                            </button>
                            <button
                                className="group  px-[7px] font-bold uppercase text-[20px]"
                                onClick={() => handleCategoryChange("casestudies")}
                            >
                                <span className="after:w-0 group-hover:after:w-full super_font" > Case Studies</span>
                            </button>
                            <button
                                className="group  px-[7px] font-bold uppercase text-[20px]"
                                onClick={() => handleCategoryChange("creativehub")}
                            >
                                <span className="after:w-0 group-hover:after:w-full super_font" > creative hub</span>
                            </button>
                            <button
                                className="px-[7px] font-bold uppercase text-[20px]"
                                onClick={() => handleCategoryChange("performancemarketing")}
                            >
                                <span className="super_font" > Performance Marketing</span>
                            </button>
                            <button
                                className="group  px-[7px] font-bold uppercase text-[20px]"
                                onClick={() => handleCategoryChange("production")}
                            >
                                <span className="after:w-0 group-hover:after:w-full super_font" > production</span>
                            </button>
                            <button
                                className="group  px-[7px] font-bold uppercase text-[20px]"
                                onClick={() => handleCategoryChange("ui/ux")}
                            >
                                <span className="after:w-0 group-hover:after:w-full super_font" > ui/ux</span>
                            </button>
                        </div>
                    </div>

                    {/* Displaying Filtered Images */}
                    <div className="flex w-[1600px] mx-auto    flex-wrap gallery-images ">
                        {filterImages(selectedCategory).map((image) => (
                            <div
                                key={image.id}
                                className="image-item w-[25%] flex justify-center mb-[25px] "
                            >
                                <img src={image.src} alt={image.category} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
};

export default Ourworkapge;
