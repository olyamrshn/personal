import React from "react";
import { tw } from "twind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faSpotify, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function App() {
    return (
        <div className={tw`font-raleway text-center`}>
            <div className={tw`text-white mx-auto max-w-screen-md`}>
                <h1 className={tw`text-4xl font-regular mb-4`}
                style={{ userSelect: 'none' }}>Hey there, I'm Olya</h1>
                <p className={tw`text-lg mb-3`}
                style={{ userSelect: 'none' }}>currently in Istanbul</p>
                <p className={tw`text-lg mb-8`}
                style={{ userSelect: 'none' }}>Find me on my socials 🌸</p>
                <div className={tw`text-white flex flex-col`}>
                    <Link
                        icon={faGoogle}
                        href="mailto:olyamrshn@gmail.com"
                        text="work-related email"
                    />
                    <Link
                        icon={faInstagram}
                        text="inst*gram"
                        href="https://www.instagram.com/llleatbabies?igshid=MzRlODBiNWFlZA%3D%3D"
                    />
                    <Link
                        text="github"
                        icon={faGithub}
                        href="https://github.com/marshennikovaolga"
                    />
                    <Link
                        icon={faSpotify}
                        href="https://open.spotify.com/user/awpkpo5yx2t80iqa4tgfvp7a7"
                        text="spotify"
                    />
                    <Link
                        icon={faTwitter}
                        href="https://twitter.com/leatbabies"
                        text="x/twitter"
                    />
                </div>
            </div>
        </div>
    );
}

const Link = ({ href, text, icon }) => (
    <a
        href={href}
        className={tw`text-white hover:text-gray-700
    active:text-gray-900 mb-8 transition duration-300
    ease-in-out inline-block`}
    >
        <FontAwesomeIcon icon={icon} className={tw`mr-2`} />
        {text}
    </a>
);