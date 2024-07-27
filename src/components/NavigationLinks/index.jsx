import React from 'react'

const NavigationLinks = () => {
    return (
        <>
            <ul className='flex flex-col gap-4 text-center lg:flex-row lg:gap-14'>
                <li className='navLink navLinkAfter hover:after:w-full'>
                    Início
                </li>
                <li className='navLink navLinkAfter hover:after:w-full'>
                    <a href="#products">Produtos</a>
                </li>
                <li className='navLink navLinkAfter hover:after:w-full'>
                    <a href="#about">Sobre</a>
                </li>
            </ul>
        </>
    )
}


export default NavigationLinks