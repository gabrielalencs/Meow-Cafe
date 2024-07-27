import React from 'react';

import coffeImage from '../../assets/images/location-bg.svg';
import iconLocation from '../../assets/images/location-logo.svg';

const LocationSection = () => {
    return (
        <section className='mt-28 bg-gradient-location mx-8 rounded-3xl relative px-11 py-10 text-white text-center lg:flex lg:items-center lg:justify-between lg:py-28 lg:px-32 lg:text-left lg:mt-40'>
            <div className='lg:relative lg:z-20'>
                <h2 className='text-3xl font-semibold md:text-4xl lg:text-6xl'>Meow Enjoy</h2>
                <span className='inline-block mt-4 font-semibold md:text-lg'>Todos os sábados e domingos</span>
                <p className='mt-4 md:text-lg'>Venha tomar o seu brunch com a gente!</p>
            </div>

            <div className='hidden lg:block lg:absolute lg:top-3 lg:right-96 lg:z-10 lg:opacity-70'>
                <img src={coffeImage} alt="imagem de uma xícara de café" className='w-430' />
            </div>

            <div className='mt-10 lg:mt-0 lg:relative lg:z-20'>
                <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Onde estamos</h2>
                <p className='mt-3 md:text-lg'>Você pode nos encontrar no endereço:</p>
                <p className='flex items-center justify-center text-left gap-5 mt-6 md:text-lg'>
                    <img src={iconLocation} alt="icone de localização" />
                    <span>Rua do Miado 234, Gatolândia</span>
                </p>
            </div>
        </section>
    )
}

export default LocationSection