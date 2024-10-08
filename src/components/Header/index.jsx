import React, { useState, useEffect, useCallback } from 'react'

import headerLogo from '../../assets/images/cat-logo-header.svg';

import Button from '../Button';
import NavigationLinks from '../NavigationLinks';

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const handleMenuMobileClick = useCallback(() => {
        setMenuVisible(prevState => !prevState);
    }, []);

    const handleResize = useCallback(() => {
        if (window.innerWidth > 992) {
            setMenuVisible(false);
        }
    }, []);
    
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);


    return (
        <header className='max-w-1216 mx-auto pt-5 z-10 relative px-10 flex items-center justify-between'>
            <div className='flex items-center'>
                <img src={headerLogo} alt="logo da empresa meow café" className='relative right-10' />
                <span className='hidden m-[-40] text-xl font-bold sm:inline'>Meow Café</span>
            </div>

            <div className='inline-block relative z-10 lg:hidden'>
                <label className="hamburger" >
                    <input type="checkbox" checked={menuVisible} onChange={handleMenuMobileClick} />
                    <svg viewBox="0 0 32 32">
                        <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                        <path className="line" d="M7 16 27 16"></path>
                    </svg>
                </label>
            </div>

            <nav className={`containerMobileMenu ${menuVisible ? 'showMenuMobile' : 'hiddenMenuMobile'}`}>
                <NavigationLinks />
                <Button sizeText='text-md lg:text-lg lg:mt-0' bgColor='bg-brown-primary' textColor='text-white' />
            </nav>

            <nav className='containerDesktopMenu'>
                <NavigationLinks />
                <Button sizeText='text-md lg:text-lg lg:mt-0' bgColor='bg-brown-primary' textColor='text-white' />
            </nav>
        </header>
    )
}

export default Header