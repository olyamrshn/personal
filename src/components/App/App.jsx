import { tw } from 'twind'
import './App.css'
import AnimatedLink from '../AnimatedLink'
import { useState, useEffect } from 'react'
import { faInstagram, faGithub, faSpotify, faTwitter, faGoogle }
    from '@fortawesome/free-brands-svg-icons'
import rightImage from '../../images/right.png'
import bottomImage from '../../images/bottom.png'

export default function App() {
    const [showLinks, setShowLinks] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const links = [
        { icon: faInstagram, text: "instagram", href: "https://www.instagram.com/llleatbabies?igshid=MzRlODBiNWFlZA%3D%3D" },
        { icon: faGithub, text: "github", href: "https://github.com/marshennikovaolga" },
        { icon: faTwitter, text: "x/twitter", href: "https://twitter.com/leatbabies" },
        { icon: faSpotify, text: "spotify", href: "https://open.spotify.com/user/awpkpo5yx2t80iqa4tgfvp7a7" },
        { icon: faGoogle, text: "work-related email", href: "mailto:olyamrshn@gmail.com" }
    ];

    const buttonClick = () => {
        setShowLinks(!showLinks);
    };

    useEffect(() => {
        let timer;
        if (showLinks) {
            timer = setTimeout(() => {
                if (currentIndex < links.length) {
                    setCurrentIndex(currentIndex + 1);
                }
            }, 500);
        }
        return () => clearTimeout(timer);
    }, [showLinks, currentIndex, links]);

    useEffect(() => {
        if (!showLinks) {
            setCurrentIndex(0);
        }
    }, [showLinks]);

    return (
        <div className={tw`font-raleway mt-10 text-center flex items-center justify-center`} style={{ userSelect: 'none' }}>
            <div className={tw`text-white mx-auto max-w-screen-md`}>
                <h1 className={tw`text-xl font-regular mb-4`}>Marshennikova Olga</h1>
                <p className={tw`text-s mb-3 opacity-70`}>frontend dev</p>
                <p className={tw`text-lg mb-3`}>based in Tbilisi since march 2024 🇬🇪</p>
                <div className={tw`pt-5`}>
                    <p className={tw`text-base mb-1`}>Hey there! I'm Olya</p>
                    <p className={tw`text-base mb-1`}> Currently updating my portfolio and am keen on joining</p>
                    <p className={tw`text-base mb-1`}>collaborative projects. At the moment, developing</p>
                    <p className={tw`text-base mb-1`}>functionality for the <a href="https://github.com/kuskusapp" className={tw`text-blue-500 hover:underline`}>Kuskus app,</a> you can check</p>
                    <p className={tw`text-base mb-2`}> my repo <a href="https://github.com/marshennikovaolga/drag-n-drop" className={tw`text-blue-500 hover:underline`}>here</a></p>
                </div>

                <div className={tw`mt-3`}>
                    <p className={tw`text-base mb-2`}>rn i'm studying:</p>
                    <p className={tw`text-base opacity-70`}>typescript, react native, graphql</p>
                </div>

                <p className={tw`text-lg mt-8 mb-4`}>Find me on my socials
                    <button className={tw`ml-5`} onClick={buttonClick}>
                        {showLinks ? (<img src={bottomImage} alt="Close" className={tw`w-auto h-5`} />)
                            : (<img src={rightImage} alt="Open" className={tw`bounce-image w-auto h-5`} />)}
                    </button>
                </p>
                <div className={tw`text-white flex flex-wrap justify-center`}>
                    {links.map((link, index) => (
                        <div key={index} className={`link-item ${showLinks && index < currentIndex ? 'show' : ''}`}
                            style={{ marginBottom: '5px' }}>
                            <AnimatedLink
                                show={true}
                                index={index}
                                icon={link.icon}
                                text={link.text}
                                href={link.href}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
