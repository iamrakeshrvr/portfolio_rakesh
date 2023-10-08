"use client"
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import Link from 'next/link'

const Header = () => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        className="flex flex-row items-center">
            
            <SocialIcon url="https://www.linkedin.com/in/rakesh-ranganathan-ab9337194?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BYwEjreKQ7aD4fDFxrddRA%3D%3D" 
            fgColor="white"
            bgColor="transparent"
            />
            <SocialIcon url="https://github.com/iamrakeshrvr" 
            fgColor="white"
            bgColor="transparent"
            />
            <SocialIcon url="https://www.instagram.com/iamrakeshrvr/?next=%2F#" 
            fgColor="white"
            bgColor="transparent"
            />
        </motion.div>
    <Link href='#contactme'>
        <motion.div
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer">
            <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="white"
            bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-white-400">Get In Touch</p>
        </motion.div>  
    </Link>  
    </header>
  )
}

export default Header
