import React from 'react'

const NavigationLinks = () => {
    return (
        <>
            <ul className='flex flex-col gap-4 text-center lg:flex-row lg:gap-14'>
                <li className='navLink navLinkAfter hover:after:w-full'>Início</li>
                <li className='navLink navLinkAfter hover:after:w-full'>Produtos</li>
                <li className='navLink navLinkAfter hover:after:w-full'>Sobre</li>
            </ul>
        </>
    )
}

export default NavigationLinks