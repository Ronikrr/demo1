import React from 'react'
import service_1 from '../../assets/img/sevice/01-service-social-media-creative-srtategy.png'
import service_1_gif from '../../assets/img/sevice/01-service-gif-social-media-creative-srtategy.gif'
import service_2 from '../../assets/img/sevice/02-service-media-planning-buying.png'
import service_2_gif from '../../assets/img/sevice/02-service-gif-media-planning-buying.gif'
import service_3 from '../../assets/img/sevice/03-service-analytics-seo.png'
import service_3_gif from '../../assets/img/sevice/03-service-gif-analytics-seo.gif'
import service_4 from '../../assets/img/sevice/04-service-branding-marketing-communications.png'
import service_4_gif from '../../assets/img/sevice/04-service-gif-branding-marketing-communications.gif'
import service_5 from '../../assets/img/sevice/05-service-mobile-website-ui-ux.png'
import service_5_gif from '../../assets/img/sevice/05-service-gif-mobile-website-ui-ux.gif'
import service_6 from '../../assets/img/sevice/06-service-influencer-management.png'
import service_6_gif from '../../assets/img/sevice/06-service-gif-influencer-management.gif'
import service_7 from '../../assets/img/sevice/07-service-videio-production.png'
import service_7_gif from '../../assets/img/sevice/07-service-videio-production.png'
import service_8 from '../../assets/img/sevice/08-service-consulting-services.png'
import service_8_gif from '../../assets/img/sevice/08-service-gif-consulting-services.gif'
import service_9 from '../../assets/img/sevice/09-service-technology.png'
import service_9_gif from '../../assets/img/sevice/09-service-gif-technology.gif'

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
        title: "Media Planning",
        title_1: "& Buying",
        discription: "We help you profitably define your marketing goals with our expertise in media planning and buying.",
        src: service_2,
        gif: service_2_gif,
    }
    , {
        id: 3,
        title: "Analytics & SEO",
        discription: "We marinate strategies that best suit your business objectives by sprinkling the perfect salts of creativity and research.",
        src: service_3,
        gif: service_3_gif,
    }
    , {
        id: 4,
        title: "Branding & Marketing",
        title_1: "Communications",
        discription: "When we say we give your brand a VOICE we mean – V : Versatile, O : Omnipotent, I : Impressional, C : Captivating, E : Empowered way of branding and communicating your business.",
        src: service_4,
        gif: service_4_gif,
    }
    , {
        id: 5,
        title: "Mobile & Website",
        title_1: "UI/UX",
        discription: "From the essential to the ornate, everything is taken care of completely, to offer a user-friendly interface and experience to your consumers.",
        src: service_5,
        gif: service_5_gif,
    }
    , {
        id: 6,
        title: "Influencer",
        title_1: "Management",
        discription: "To make your idea come to life, we dive into a pool of talent and find the right influencer(s) for the task in hand.",
        src: service_6,
        gif: service_6_gif,
    }
    , {
        id: 7,
        title: "Video",
        title_1: "Production",
        discription: "A perfect storyline is incomplete without the right set of shots taken from the perfect angles.",
        src: service_7,
        gif: service_7_gif,
    }
    , {
        id: 8,
        title: "Consulting",
        title_1: "Services",
        discription: "We do a thorough research and integrate industry insights with internet trends to give you the best advice.",
        src: service_8,
        gif: service_8_gif,
    }
    , {
        id: 9,
        title: "Technology",
        discription: "Only unrealistic aspect of us using technology is the experience we create for you outside our daily lives using the best of tech and tools.",
        src: service_9,
        gif: service_9_gif,
    }
    ,

]
const Ourservices = () => {
    return (
        <div className='pt-[105px] data_cla' >
            <div className="container mx-auto lg:max-w-[71.25rem] pt-[1.5rem] pb-[1rem]">
                <div className="w-full lg:w-[1140px] pb-[1rem] px-[1rem] mx-auto flex flex-wrap items-center">
                    <div className="flex items-center flex-col md:flex-row md:pt-[1rem] p-0 md:px-[1rem] w-full">
                        <div className="w-full text-center md:text-left  md:w-6/12 pt-[1rem]">
                            <h1 className='text-[30px] lg:text-[60px] capitalize leading-[1.2] font-extrabold' > our <br /> services </h1>
                        </div>
                        <div className="w-full text-center md:text-left  md:w-6/12 pt-[1rem]">
                            <p className='text-[18px]' >We help businesses reach their full potential by creating a brand identity that is authentic and reflective of them. We understand that every brand comes with its own unique challenges, and hence requires expertise. We join hands with you as your growth partners and focus on delivering a power-packed panga each time!</p>
                        </div>
                    </div>
                </div>
            </div>
            {
                service_page.map((sec, index) => (
                    <div key={index} className="container mx-auto lg:max-w-[71.25rem] pt-[1.5rem] pb-[1rem]">
                        <div className={`w-full lg:w-[1140px] pb-[1rem] px-[1rem] mx-auto flex ${index % 2 === 1 ? 'flex-wrap-reverse' : 'flex-wrap'} items-center`}>

                            {/* Conditional Layout Based on Even/Odd Index */}
                            {index % 2 === 1 ? (
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
    <div className={`w-full md:w-6/12 pt-[1rem] ${isReversed ? 'md:pl-[1rem]' : 'md:pr-[1rem]'} ${isReversed ? 'md:text-right' : 'md:text-left'} space-y-[0.5rem]`}>
        <div className={`flex flex-col text-center ${isReversed ? 'md:text-right' : 'md:text-left'} `}>
            <span className='text-[24px] font-extrabold leading-[1.2]'>{title}</span>
            <span className='text-[24px] font-extrabold leading-[1.2]'>{title_1}</span>
        </div>
        <p className={`text-[18px] text-center ${isReversed ? 'md:text-right' : 'md:text-left'}  `}>{discription}</p>
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