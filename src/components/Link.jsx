import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { tw } from 'twind'

export default function Link({ href, text, icon }) {
    return (
        <a
            href={href}
            className={tw`text-white hover:text-gray-500 active:text-gray-800 mb-4 transition duration-300 ease-in-out inline-block`}
            style={{ animationName: 'fadeInDown', animationDuration: '0.5s' }}
        >
            <FontAwesomeIcon icon={icon} className={tw`mr-2`} />
            {text}
        </a>
    )
};