import React, { useState } from "react";
import branding_1 from "../../assets/img/ourwork/branding/SP-website-design-project-031.png";
import branding_2 from "../../assets/img/ourwork/branding/SP-website-design-project-0310.png";
import branding_3 from "../../assets/img/ourwork/branding/SP-website-design-project-0311.png";
import branding_4 from "../../assets/img/ourwork/branding/SP-website-design-project-0312.png";
import branding_5 from "../../assets/img/ourwork/branding/SP-website-design-project-0313.png";
import branding_6 from "../../assets/img/ourwork/branding/SP-website-design-project-0314.png";
import branding_7 from "../../assets/img/ourwork/branding/SP-website-design-project-0315.png";
import branding_8 from "../../assets/img/ourwork/branding/SP-website-design-project-0316.png";
import creative_1 from '../../assets/img/ourwork/creative/Bajaj_CreativeHub.png';
import creative_2 from '../../assets/img/ourwork/creative/IKEA-Thumbnail-Website-template-1.jpg';
import creative_3 from '../../assets/img/ourwork/creative/Juski_CreativeHub-1.png';
import creative_4 from '../../assets/img/ourwork/creative/KY_OneStateManyWorlds_CreativeHub.png';
import creative_5 from '../../assets/img/ourwork/creative/KarnatakaTourism_SocialMedia_CreativeHub.png';
import creative_6 from '../../assets/img/ourwork/creative/Manipal_DocwithSign_CreativeHub.jpg';
import creative_7 from '../../assets/img/ourwork/creative/Manipal_SocialMedia_CreativeHub.jpg';
import creative_8 from '../../assets/img/ourwork/creative/SP-website-design-project-0341.jpg'
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
        { id: 7, src: branding_7, category: "branding" },
        { id: 8, src: branding_8, category: "branding" },
        { id: 9, src: creative_1, category: "creative" },
        { id: 10, src: creative_2, category: "creative" },
        { id: 11, src: creative_3, category: "creative" },
        { id: 12, src: creative_4, category: "creative" },
        { id: 13, src: creative_5, category: "creative" },
        { id: 14, src: creative_6, category: "creative" },
        { id: 15, src: creative_7, category: "creative" },
        { id: 16, src: creative_8, category: "creative" },

    ];
    return (
        <div className="pt-[105px] data_cla">
            <div className="container mx-auto lg:max-w-[71.25rem] pt-[1.5rem] pb-[1rem]">
                <div className="w-full lg:w-[1140px] pb-[1rem] px-[1rem] mx-auto flex flex-wrap items-center">
                    <div className="flex items-center flex-col md:flex-row md:pt-[1rem] p-0 md:px-[1rem] w-full">
                        <div className="w-full text-center md:text-left  md:w-6/12 pt-[1rem]">
                            <h1 className="text-[30px] lg:text-[60px] capitalize leading-[1.2] font-extrabold">

                                Our Brand <br />
                                Raids
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
                        <div className="block text-center mb-[40px] mt-[20px] md:px-[32px] cursor-pointer">
                            {["all", "branding", "casestudies", "creative", "performancemarketing", "production", "ui/ux"].map((category) => (
                                <button
                                    key={category}
                                    className={`group text-center relative visited:text-purple-400 px-[10px] font-bold uppercase text-[20px] transition-all duration-300 ${selectedCategory === category ? "underline decoration-[#cc121c] decoration-4 underline-offset-8" : ""
                                        }`}
                                    onClick={() => handleCategoryChange(category)}
                                >
                                    <span className="relative z-10">{category.replace(/([A-Z])/g, ' $1').trim()}</span>
                                    <span className="absolute left-0 top-full w-full border-b-4 border-[#cc121c] opacity-0 transform scale-0 transition-transform duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100"></span>
                                </button>
                            ))}

                        </div>
                    </div>


                    {/* Displaying Filtered Images */}
                    <div className="flex w-full md:w-[1600px] mx-auto    flex-wrap gallery-images ">
                        {filterImages(selectedCategory).map((image) => (
                            <div
                                key={image.id}
                                className="image-item w-full md:w-[25%] mb-[25px]  flex justify-center  "
                            >
                                <div className="w-full md:w-11/12 ">

                                    <img src={image.src} className="object-cover w-full h-full aspect-square" alt={image.category} />
                                </div>
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
