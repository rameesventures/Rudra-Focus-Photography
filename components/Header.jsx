import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import { Button } from './ui/button'
import { RiPhoneFill } from 'react-icons/ri'
import Link from 'next/link'
import MobileNavbar from './MobileNavbar'
import SideNavbar from './SideNavbar'

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full bg-white">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2">

                {/* LOGO */}
                <Logo />

                {/* NAVBAR */}
                <Navbar />

                {/* SIDE NAVBAR */}
                <SideNavbar/>

                {/* BUTTON */}
                <div className="hidden md:flex">
                    <Link href="tel:+918438866374">
                        <Button className="h-10 w-36 bg-primary text-white hover:bg-black">
                            <RiPhoneFill className=" hover:bg-black hover:text-white" />
                            Call Now
                        </Button>
                    </Link>
                </div>

                {/* MOBILE */}
                <div className="md:hidden">
                    <MobileNavbar />
                </div>

            </div>
        </header>
    )
}

export default Header