import Link from 'next/link';
import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import { urlFor } from '../sanity';
import { PageInfo } from '../typing';
import BackgroundCircles from './BackgroundCircles';

type Props = {
    pageInfo: PageInfo
}

function Hero({ pageInfo }: Props) {
    const [text, count] =useTypewriter({
        words: [
            `Hi, my name is ${pageInfo.name}`,
            "A Technophile who love Car",
            "A Gymaholic",
            "Caffein Addict",
            "And Coding Stuff!"
        ],
        loop: true,
        delaySpeed: 2000,
        
    });
    
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
        <BackgroundCircles/>
        <img className='relative rounded-full h-40 w-40 mx-auto object-cover'
        src={urlFor(pageInfo?.heroImage).url()} alt="" />
        <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span> {text} </span>
            <Cursor cursorColor="#F7AB0A"></Cursor>
        </h1>
        <div className='pt-10'>
            <Link href="#about">
            <button className='heroButton'>About</button>
            </Link>
            <Link href="#skills">
            <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#projects">
            <button className='heroButton'>Projects</button>
            </Link>
        </div>
        </div>

    </div>
  )
}

export default Hero