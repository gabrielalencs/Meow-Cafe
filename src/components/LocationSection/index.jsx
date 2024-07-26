import React from 'react';

import { CiLocationOn } from "react-icons/ci";

const LocationSection = () => {
    return (
        <section className='mt-28 bg-gradient-location mx-8 rounded-3xl px-11 py-10 text-white text-center'>
            <div>
                <h2 className='text-3xl font-semibold'>Meow Enjoy</h2>
                <span className='inline-block mt-4 font-semibold'>Todos os sábados e domingos</span>
                <p className='mt-4'>Venha tomar o seu brunch com a gente!</p>
            </div>

            <div className='mt-10'>
                <h2 className='text-2xl font-semibold '>Onde estamos</h2>
                <p className='mt-3 '>Você pode nos encontrar no endereço:</p>

                <p className='flex items-center justify-center text-left gap-5 mt-6'>
                    <CiLocationOn size={40} />
                    <span>Rua do Miado 234, Gatolândia</span>
                </p>

            </div>
        </section>
    )
}

export default LocationSection