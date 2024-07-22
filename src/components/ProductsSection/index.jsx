import React from 'react'

const ProductsSection = () => {
    return (
        <section className='mt-24 mb-96 px-10 lg:mt-48'>
            <div className='max-w-525 lg:text-center lg:mx-auto'>
                <h2 className='text-brown-primary text-4xl font-bold w-max after:content-[""] after:block after:h-px after:w-9/12 after:relative after:top-2 after:mx-auto after:bg-brown-primary lg:mx-auto lg:text-5xl'>Cafés</h2>
                <p className='mt-7 md:text-lg'>
                    Conheça nossos cafés exclusivos pensados e preparados por nossos baristas renomados.
                </p>
            </div>
        </section>
    )
}

export default ProductsSection