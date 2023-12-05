import { useEffect, useState } from 'react';
import Headroom from 'react-headroom';
import { FaBarsProgress, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import NavLogo from './NavLogo';
import NavItems from './NavItems';
import { motion } from 'framer-motion';
const Navbar = () => {
    const [scrollY, setScrollY] = useState(0);
    const [openSideNav, setOpenSideNav] = useState(false);

    const handleScroll = () => setScrollY(window.scrollY);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    const handleWidth = () => window.innerWidth >= 768 && setOpenSideNav(false);
    useEffect(() => {
        window.addEventListener('resize', handleWidth);
        return () => window.removeEventListener('resize', handleWidth);
    })

    return (
        <div>
            <Headroom pin={scrollY >= 200}>
                <div className={scrollY >= 200 ? ' border-b-slate-700 border-b bg-dark backdrop-blur-lg bg-opacity-50 text py-2 transition-all' : 'py-0 transition-all'}>
                    <div className='container py-2'>
                        <div className='flex items-center justify-between'>
                            <NavLogo />
                            <div className='hidden md:inline-block'>
                                <NavItems />
                            </div>
                            <motion.button whileTap={{ scale: .9 }} onClick={() => setOpenSideNav(!openSideNav)} className='bg-slate-700 p-2 rounded-md text-xl text-secondery transition-colors hover:text-primary md:hidden'><FaBarsProgress /></motion.button>
                        </div>
                    </div>
                </div>
            </Headroom>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeOut', duration: 2 }}
                className={`fixed top-0 bottom-0 w-full sm:w-[340px] bg-dark z-50 border-l border-l-slate-700 p-5 ${openSideNav ? 'right-0 visible' : 'right-0 invisible'}`}>
                <div className='flex items-center justify-between mb-5'>
                    <NavLogo />
                    <button onClick={() => setOpenSideNav(false)} className='text-2xl hover:text-primary transition-all'><IoClose /></button>
                </div>
                <div className='flex flex-col items-start gap-2'>
                    <NavItems />
                </div>
                <div className='flex items-center justify-center gap-1 text-3xl absolute left-0 right-0 bottom-3'>
                    <button className='p-2 hover:text-primary transition-all'><FaGithub /></button>
                    <button className='p-2 hover:text-primary transition-all'><FaLinkedin /></button>
                    <button className='p-2 hover:text-primary transition-all'><FaFacebook /></button>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeOut', duration: 2 }}
                onClick={() => setOpenSideNav(false)}
                className={`fixed left-0 top-0 right-0 bottom-0 bg-dark/50 backdrop-blur-lg z-40 transition-all cursor-pointer ${openSideNav ? 'visible' : 'invisible'}`}>
            </motion.div>
        </div>
    );
};

export default Navbar;