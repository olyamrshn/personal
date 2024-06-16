import { tw } from "twind";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faTwitter, faSpotify, faDiscord, faGoogle } from '@fortawesome/free-brands-svg-icons';


export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { title: "Learn Anything", description: "Learning platform",  url: "https://github.com/learn-anything/learn-anything.xyz" },
    { title: "KusKus", description: "Food & drink sharing app", url: "https://github.com/kuskusapp/kuskus" },
    { title: "Solbond", description: "Digital marketplace on Solana", url: "https://github.com/solbond/solbond.so" },
    { title: "ADL company", description: "Landing page", url: "https://github.com/olyamrshn/turkish-visitors" },
    { title: "Dear Diary", description: "My diary", url: "https://github.com/olyamrshn/dear-diary" },
     ]


  const links = [
    {
      icon: faInstagram,
      text: "instagram",
      href: "https://www.instagram.com/llleatbabies?igshid=MzRlODBiNWFlZA%3D%3D",
    },
    {
      icon: faGithub,
      text: "github",
      href: "https://github.com/olyamrshn",
    },
    {
      icon: faTwitter,
      text: "x/twitter",
      href: "https://twitter.com/leatbabies",
    },
    {
      icon: faSpotify,
      text: "spotify",
      href: "https://open.spotify.com/user/awpkpo5yx2t80iqa4tgfvp7a7",
    },
    {
      icon: faDiscord,
      text: "discord",
      href: "https://discord.com/users/704485765010161966",
    },
    {
      icon: faGoogle,
      text: "work-related email",
      href: "mailto:olyamrshn@gmail.com",
    },
  ];

  return (
    <div
    className={tw`text-white mx-auto max-w-sm user-select-none`}
    >
      <div className={tw`text-white mx-auto max-w-screen-md`}>
        <h1 className={tw`text-base font-regular mb-3`}>Marshennikova Olga</h1>
        <p className={tw`text-sm mb-3 opacity-70`}>frontend dev</p>
        <p className={tw`text-base mb-3`}>based in Tbilisi, Georgia 🇬🇪</p>
        <div className={tw`pt-5`}>
          <p className={tw`text-base whitespace-pre-line`}>
            Hey there! I'm Olya. Currently updating my portfolio and am keen on
            joining collaborative projects.
          </p>
        </div>
        {items.map((item, index) => (
            <div key={index} className={tw`flex flex-col md:flex-row items-center space-x-3 justify-center my-4`}>
              <h2 className={tw`text-base text-white mb-1`}>
                <a href={item.url}>
                  {item.title}
                </a>
              </h2>
              <p className={tw`text-sm md:text-base text-white text-opacity-70`}>{item.description}</p>
            </div>
          ))}
        <p className={tw`text-base mt-6 mb-4`}>
          Find me on my socials
        </p>
        <div className={tw`text-white text-base flex flex-col md:flex-row space-x-2 items-center justify-center`}>
  {links.map((link, index) => (
    <div key={index} className={tw`mx-5 mb-2`}>
      <a href={link.href} className={tw`flex items-center space-x-2`}>
        <FontAwesomeIcon icon={link.icon} />
        <span>{link.text}</span>
      </a>
    </div>
  ))}
</div>
      </div>
    </div>
  );
}

