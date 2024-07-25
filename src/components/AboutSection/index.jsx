import React from 'react'

const AboutSection = () => {
    return (
        <section className='mt-28 mb-96 px-8 text-center text-brown-primary lg:flex lg:justify-between lg:text-left lg:gap-28 xl:gap-20'>
            <div className='max-w-748 mx-auto lg:max-w-full lg:flex-1'>
                <span className='hidden lg:block lg:font-medium lg:text-lg'>Sobre nós</span>
                <h2 className='text-xl font-semibold md:text-2xl lg:text-4xl'>Nós oferecemos uma experiência inesquecível para amantes de café e pais de pet!</h2>
            </div>

            <div className='mt-6 max-w-748 mx-auto lg:max-w-full lg:flex-1 xl:pr-56 2xl:pr-24'>
                <span className='text-sm font-semibold md:text-base'>O melhor lugar para apreciar o seu café</span>
                <p className='text-sm mt-3 md:text-base'>
                    No Meow Cafe, priorizamos a criação de um espaço onde tanto os seres humanos quanto seus animais de estimação possam relaxar e desfrutar.
                </p>
                <p className='text-sm mt-2 md:text-base'>
                    Nosso design interior é inspirado na harmonia e conforto, com sofás aconchegantes, iluminação suave e uma decoração que remete à natureza e à alegria que os animais trazem para nossas vidas.
                </p>
            </div>
        </section>
    )
}

export default AboutSection