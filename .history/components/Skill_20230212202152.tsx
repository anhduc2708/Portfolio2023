import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity'
import {Skill}  from '../typing'

type Props = { 
  skill: Skill;
  directionLeft?: boolean;
}

function Skill({ skill, directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
        initial={{
            x: directionLeft ? -200 :200,
            opacity:0
        }}
        whileInView={{ opacity: 1, x:0}}
        transition={{ duration:1}}
        src={urlFor(skill?.image).url()}
        className='rounded-full border border-gray-500 object-cover w-12 h-12 xl:w-2  filter group-hover:grayscale transition duration-300 ease-in-out'/>
    <div className="absolute opacity-0 group-hover:opacity-80 trasition duration-300 ease-in-out group-hover:bg-white h-12 w-12  rounded-full z-0">
        <div className="flex items-center justify-center h-full">
            <p className="text-base font-bold text-black opacity-100 text-center">{skill?.title}</p>
        </div>
    </div>
    </div>
  )
}

export default Skill