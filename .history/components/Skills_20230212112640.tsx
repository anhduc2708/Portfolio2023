import { motion } from 'framer-motion'
import React from 'react'
import { Skill } from '../typing'
import { urlFor } from '../sanity'
import SkillInfo from './SkillInfo'

type Props = {
  skills: Skill[];
}

export default function Skills({skills}: Props) {
  return (
    <motion.div 
    initial={{ opacity:0}}
    whileInView={{ opacity:1}}
    transition={{duration:1.7}}
    className="min-h-screen flex flex-col relative text-center md:text-left xl:space-y-0 xl:flex-row max-w-[2000px] xl:px-10 justify-center
     mx-auto items-center">
    
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>
        {/* <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">Hover over a skill for curent profieciency</h3> */}

        <div className="grid grid-cols-4 gap-5 pt-10">
        {skills?.map(skill => (
          <SkillInfo key= {skill._id} skill()}/>
          
          ))}
        </div>
    </motion.div>
   
  )
}