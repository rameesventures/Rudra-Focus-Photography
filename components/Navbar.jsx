"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { motion } from 'framer-motion';

const Navbar = () => {

    const Links = [
        { path: '/', name: 'Home' },
        { path: '/services', name: "Services" },
        { path: '/clients', name: 'Clients' },
        { path: '/about', name: "About" },
        { path: "/contact", name: "Contact" }
    ];

    const path = usePathname();


    return (
        <div className='hidden md:flex gap-x-8 items-center'>
            {Links.map((link, index) => {
                return <Link href={link.path} key={index} className='relative text-black hover:text-primary transition-all'>
                    {link.path === path && (
                        <motion.span
                            initial={{ y: '-100%' }}
                            animate={{ y: 0 }}
                            transition={{ type: 'tween' }}
                            layoutId="underline"
                            className='absolute left-0 top-full h-0.5 bg-primary w-full'
                        >
                        </motion.span>
                    )}
                    {link.name}
                </Link>
            })}

        </div>
    )
}

export default Navbar