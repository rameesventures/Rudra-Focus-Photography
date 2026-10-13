"use client"
import React from 'react'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet'
import { AlignJustify } from 'lucide-react'
import Logo from './Logo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const MobileNavbar = () => {

    const Links = [
        { path: '/', name: 'Home' },
        { path: '/services', name: "Services" },
        { path: '/clients', name: 'Clients' },
        { path: '/about', name: "About" },
        { path: "/contact", name: "Contact" }
    ];

    const path = usePathname();

    return (
        <Sheet>
            <SheetTrigger >
                <AlignJustify className='cursor-pointer text-black' />
            </SheetTrigger>

            <SheetContent>

                <div>
                    <div>

                        <div className='md:hidden flex flex-col gap-y-8 items-center mt-3 py-3 px-2 overflow-hidden'>
                            {Links.map((link, index) => {
                                return <Link href={link.path} key={index} className='relative hover:text-primary transition-all'>
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
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNavbar