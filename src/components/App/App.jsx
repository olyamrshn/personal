import { tw } from 'twind'
import './App.css'
import AnimatedLink from '../AnimatedLink'
import { useState, useEffect } from 'react'
import { faInstagram, faGithub, faSpotify, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

export default function App() {
    const [showLinks, setShowLinks] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

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
        <div className={tw`font-raleway mt-10 text-center flex items-center justify-center`}>
            <div className={tw`text-white mx-auto max-w-screen-md`}>
                <h1 className={tw`text-4xl font-regular mb-4`} style={{ userSelect: 'none' }}>Hey there, I'm Olya</h1>
                <p className={tw`text-s mb-3 opacity-70`} style={{ userSelect: 'none' }}>frontend dev</p>
                <p className={tw`text-lg mb-3`} style={{ userSelect: 'none' }}>Tbilisi since March 2024</p>
                <p className={tw`text-lg mb-8`} style={{ userSelect: 'none' }}>Find me on my socials&nbsp;
                    <button onClick={buttonClick}>
                        {showLinks ? (<KeyboardArrowDownIcon />)
                            : (<KeyboardArrowRightIcon />)}
                    </button>
                </p>
                <div className={tw`text-white flex flex-wrap justify-center`}>
                    {links.map((link, index) => (
                        <div key={index} className={`link-item ${showLinks && index < currentIndex ? 'show' : ''}`}
                            style={{ marginBottom: '10px' }}>
                            <AnimatedLink
                                index={index}
                                show={true}
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
