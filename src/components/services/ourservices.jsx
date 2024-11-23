import React from 'react'
import service_1 from '../../assets/img/sevice/01-service-social-media-creative-srtategy.png'
import service_1_gif from '../../assets/img/sevice/01-service-gif-social-media-creative-srtategy.gif'

const service_page = [
    {
        id: 1,
        title: "Creative &",
        title_1: " Digital Strategy",
        discription: "We marinate strategies that best suit your business objectives by sprinkling the perfect salts of creativity and research.",
        src: service_1,
        gif: service_1_gif,
    }
    , {
        id: 2,
        title: "Creative & Digital Strategy",
        discription: "We marinate strategies that best suit your business objectives by sprinkling the perfect salts of creativity and research.",
        src: service_1,
        gif: service_1_gif,
    }
    , {
        id: 3,
        title: "Creative & Digital Strategy",
        discription: "We marinate strategies that best suit your business objectives by sprinkling the perfect salts of creativity and research.",
        src: service_1,
        gif: service_1_gif,
    }
    , {
        id: 4,
        title: "Creative & Digital Strategy",
        discription: "We marinate strategies that best suit your business objectives by sprinkling the perfect salts of creativity and research.",
        src: service_1,
        gif: service_1_gif,
    }
    , {
        id: 5,
        title: "Creative & Digital Strategy",
        discription: "We marinate strategies that best suit your business objectives by sprinkling the perfect salts of creativity and research.",
        src: service_1,
        gif: service_1_gif,
    }
    , {
        id: 6,
        title: "Creative & Digital Strategy",
        discription: "We marinate strategies that best suit your business objectives by sprinkling the perfect salts of creativity and research.",
        src: service_1,
        gif: service_1_gif,
    }
    , {
        id: 7,
        title: "Creative & Digital Strategy",
        discription: "We marinate strategies that best suit your business objectives by sprinkling the perfect salts of creativity and research.",
        src: service_1,
        gif: service_1_gif,
    }
    , {
        id: 8,
        title: "Creative & Digital Strategy",
        discription: "We marinate strategies that best suit your business objectives by sprinkling the perfect salts of creativity and research.",
        src: service_1,
        gif: service_1_gif,
    }
    , {
        id: 9,
        title: "Creative & Digital Strategy",
        discription: "We marinate strategies that best suit your business objectives by sprinkling the perfect salts of creativity and research.",
        src: service_1,
        gif: service_1_gif,
    }
    ,

]
const Ourservices = () => {
    return (
        <div className='pt-[105px] data_cla' >
            <div className="container mx-auto lg:max-w-[71.25rem] pt-[1.5rem] pb-[1rem]">
                <div className="w-full lg:w-[1140px] pb-[1rem] px-[1rem] mx-auto flex flex-wrap items-center">
                    <div className="flex items-center pt-[1rem] px-[1rem] w-full">
                        <div className="w-6/12 pt-[1rem]">
                            <h1 className='text-[30px] lg:text-[60px] capitalize leading-[1.2] font-extrabold' > our <br /> services </h1>
                        </div>
                        <div className="w-6/12 pt-[1rem]">
                            <p className='text-[18px]' >We help businesses reach their full potential by creating a brand identity that is authentic and reflective of them. We understand that every brand comes with its own unique challenges, and hence requires expertise. We join hands with you as your growth partners and focus on delivering a power-packed panga each time!</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container mx-auto lg:max-w-[71.25rem] pt-[1.5rem] pb-[1rem]">
                <div className="w-full lg:w-[1140px] pb-[1rem] px-[1rem] mx-auto flex flex-wrap-reverse items-center">
                    <div className="flex items-center pt-[1rem] px-[1rem] flex-wrap-reverse w-11/12 mx-auto">
                        <div className="w-6/12 pt-[1rem] pr-[1rem] space-y-[0.5rem]">
                            <span className='text-[24px] font-extrabold leading-[1.2] ' >Creative & <br />
                                Digital Strategy</span>
                            <p className='text-[18px]' >We marinate strategies that best suit your business objectives by sprinkling the perfect salts of creativity and research.</p>
                        </div>
                        <div className="w-6/12 px-[1rem] pt-[1rem]">
                            <div className="relative group service_imge_wrap">
                                <img src={service_1} className='w-full h-auto group-hover:relative group-hover:z-0' alt="" />
                                <img src={service_1_gif} className='absolute top-0 block w-full transition-opacity pointer-events-none group-hover:transition-opacity -z-10 group-hover:z-10 ' alt="" />

                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {
                service_page.map((sec, index) => (
                    <div key={index} className="container mx-auto lg:max-w-[71.25rem] pt-[1.5rem] pb-[1rem]">
                        <div className={`w-full lg:w-[1140px] pb-[1rem] px-[1rem] mx-auto flex ${index % 2 === 0 ? 'flex-wrap-reverse' : 'flex-wrap'} items-center`}>

                            {/* Conditional Layout Based on Even/Odd Index */}
                            {index % 2 === 0 ? (
                                <>
                                    <ImageSection src={sec.src} gif={sec.gif} />
                                    <TextSection title={sec.title} title_1={sec.title_1} discription={sec.discription} isReversed={true} />
                                </>
                            ) : (
                                <>
                                        <TextSection title={sec.title} title_1={sec.title_1} discription={sec.discription} isReversed={false} />
                                    <ImageSection src={sec.src} gif={sec.gif} />
                                </>
                            )}
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

const TextSection = ({ title, discription, title_1, isReversed }) => (
    <div className={`w-full md:w-6/12 pt-[1rem] ${isReversed ? 'pl-[1rem]' : 'pr-[1rem]'} space-y-[0.5rem]`}>
        <div className="text-center  md:text-left">
            <span className='text-[24px] font-extrabold leading-[1.2]'>{title}</span>
            <span className='text-[24px] font-extrabold leading-[1.2]'>{title}</span>
        </div>
        <p className='text-[18px]'>{discription}</p>
    </div>
);

const ImageSection = ({ src, gif }) => (
    <div className="w-full md:w-6/12 px-[1rem] pt-[1rem]">
        <div className="relative group service_imge_wrap">
            <img src={src} className='w-full h-auto group-hover:relative group-hover:z-0' alt="Service" />
            <img src={gif} className='absolute top-0 block w-full transition-opacity pointer-events-none group-hover:transition-opacity -z-10 group-hover:z-10' alt="Service GIF" />
        </div>
    </div>
);


export default Ourservices