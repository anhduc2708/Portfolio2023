import React from 'react'
import { SocialIcon } from 'react-social-icons';
import {motion} from 'framer-motion'


type Props = {}

function Header({}: Props){
    return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        {/* Social icon */}
    <motion.div
    initial = {{
        x: -500,
        opacity: 0,
        scale: 0.5,
    }}
    animate={{
        x:0,
        opacity:1,
        scale:1,
    }}
    transition={{
        duration: 1.5,
    }}
    className="flex flex-row items-center">
        <SocialIcon url="https://www.facebook.com/SickmyDuck2708/" 
        fgColor='grey'
        bgColor='transparent'/>
        <SocialIcon url="https://github.com/anhduc2708/" 
        fgColor='grey'
        bgColor='transparent'/>
        <SocialIcon url="https://www.linkedin.com/in/đức-anh-891a3b1a6/" 
        fgColor='grey'
        bgColor='transparent'/>
    </motion.div>

    <motion.div
     initial = {{
        x: 500,
        opacity: 0,
        scale: 0.5,
    }}
    animate={{
        x:0,
        opacity:1,
        scale:1,
    }}
    transition={{
        duration: 1.5,
    }}
    className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon className="cursor-pointer"
        network='email'
        fgColor='grey'
        bgColor='transparent'/>
        <p className="hidden md:inline-flex text-md uppercase text-gray-400">Contact Me</p>
    </motion.div>
    </header>
    

    )
}export default Header
