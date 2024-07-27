import deliveryImage from '../../assets/images/delivery.svg';

import Button from '../Button';

const DeliverySection = () => {
    return (
        <section className='mt-20 mx-8 px-11 py-10 bg-gradient-pink-delivery rounded-3xl lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:py-0 lg:mt-48'>
            <div className='text-center lg:text-right'>
                <h2 className='text-white text-3xl font-semibold md:text-5xl'>Levamos até você!</h2>
                <p className='text-white mt-3 md:text-lg'>Estamos nos principais aplicativos de Delivery!</p>
                <div className='max-w-485 mx-auto lg:max-w-80 lg:ml-44 lg:text-right'>
                    <Button sizeText='text-xl' bgColor='bg-white' textColor='text-brown-primary' />
                </div>
            </div>

            <div className='hidden lg:block'>
                <img src={deliveryImage} alt="imagem das embalagens da meow café" className='relative right-11 bottom-16' />
            </div>
        </section>
    )
}

export default DeliverySection