import React from 'react'

const AboutSection = () => {
    return (
        <section className='mt-28 px-8 text-center text-brown-primary lg:flex lg:justify-between lg:text-left lg:gap-28 lg:mt-40 xl:gap-20' id='about'>
            <div className='max-w-748 mx-auto lg:max-w-full lg:flex-1'>
                <span className='hidden lg:block lg:font-medium lg:text-lg'>Sobre nós</span>
                <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Nós oferecemos uma experiência inesquecível para amantes de café e pais de pet!</h2>
            </div>

            <div className='mt-6 text-left max-w-748 mx-auto lg:max-w-full lg:flex-1 lg:pr-24'>
                <span className='text-md font-semibold md:text-lg lg:text-xl'>O melhor lugar para apreciar o seu café</span>
                <p className='mt-5 md:text-lg'>
                    No Meow Cafe, priorizamos a criação de um espaço onde tanto os seres humanos quanto seus animais de estimação possam relaxar e desfrutar.
                </p>
                <p className='mt-3 md:text-lg'>
                    Nosso design interior é inspirado na harmonia e conforto, com sofás aconchegantes, iluminação suave e uma decoração que remete à natureza e à alegria que os animais trazem para nossas vidas.
                </p>
            </div>
        </section>
    )
}

export default AboutSection