import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity'
import { PageInfo } from '../typing'

type Props = { 
  pageInfo: PageInfo
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div 
    initial={{ opacity:0}}
    whileInView={{ opacity:1 }}
    transition={{ duration: 1.5 }}

    className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7px px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
      <motion.img 
      initial={{
        x:-200,
        opacity:0,
      }}
    whileInView={{opacity:1, x:0 }}
    transition={{
      duration:1.5
     }}
    //  viewport={{once:true}}
      src={urlFor(pageInfo?.profilePic).url()}
      className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#F7AB0A]">little</span> background</h4>
          <p className="text-base">My name is Duc 🤓 .I am a third-year student at RMIT University pursuing a Bachelor's degree in Information Technology with a minor in Web and Mobile App Development. During my time at the university, I have acquired valuable experience in project management, as well as honing my communication and teamwork skills through my role as a Student Ambassador and my two years of experience working in the English department.  As a technology enthusiast, I am passionate about creating user-friendly web and android applications using the latest technologies and programming languages. My technical skills, combined with my interpersonal abilities, have equipped me with the confidence to excel in any project I undertake. I am committed to bringing new and exciting projects to life, leveraging my skills and experience to bring value to my clients. </p>
        
        
      </div>
    </motion.div>
  )
}