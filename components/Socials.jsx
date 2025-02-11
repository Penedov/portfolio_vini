import Link from "next/link";

import {FaGithub, FaLinkedin, FaInstagram, FaTwitter} from "react-icons/fa"

const socials = [
    {icon: <FaGithub/>, path: ""},
    {icon: <FaLinkedin/>, path: ""},
    {icon: <FaInstagram/>, path: ""},
    {icon: <FaTwitter/>, path: ""},
]

const Socials = ({containerStyles, iconStyles}) => {
    return (
        <div className={`${containerStyles} flex items-center space-x-4`}>

            {socials.map((items,index) => {
                return (
                    <Link key={index} href={items.path} className={iconStyles}>
                        {items.icon}
                    </Link>
                )
            })}
        </div>
    )
}
export default Socials;