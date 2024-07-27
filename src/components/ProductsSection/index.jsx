import imageCapuccino from '../../assets/images/capuccino.svg';
import imageLatte from '../../assets/images/latte.svg';
import imageCoffeBlack from '../../assets/images/black.svg';

import Button from '../Button';

const ProductsSection = () => {
    const productInformation = [
        {
            src: imageCapuccino,
            price: 'R$ 24,00',
            title: 'Capuccino',
            description: 'Café expresso, leite vaporizado, espuma e um toque de caramelo.',
            gradient: 'bg-gradient-pink'
        },
        {
            src: imageLatte,
            price: 'R$ 16,00',
            title: 'Café ao leite',
            description: 'O clássico, amado pelos brasileiros, com um toque de sofisticação!',
            gradient: 'bg-gradient-light-brown'
        },
        {
            src: imageCoffeBlack,
            price: 'R$ 12,00',
            title: 'Café Preto',
            description: 'Grãos selecionados feitos no seu método de preparo favorito.',
            gradient: 'bg-gradient-dark-brown'
        }
    ];

    return (
        <section className='mt-32 px-8 lg:mt-56'>
            <div className='text-brown-primary max-w-525 lg:text-center lg:mx-auto'>
                <h2 className='w-max text-4xl font-bold after:content-[""] after:block after:h-px after:w-9/12 after:relative after:top-2 after:mx-auto after:bg-brown-primary lg:mx-auto lg:text-5xl'>Cafés</h2>
                <p className='mt-7 md:text-lg'>
                    Conheça nossos cafés exclusivos pensados e preparados por nossos baristas renomados.
                </p>
            </div>
            
            <div className='mt-14 flex flex-col gap-14 lg:gap-10 lg:flex-row'>
                {productInformation.map((product, key) => (
                    <div className={`max-w-360 rounded-3xl flex flex-col justify-end text-center p-8 text-white ${product.gradient} sm:mx-auto`} key={key}>
                        <div>
                            <img src={product.src} alt="imagem de uma xíraca de café" />
                        </div>

                        <div className='mt-3'>
                            <span className='font-semibold text-xl'>{product.price}</span>
                            <h2 className='font-semibold text-3xl mt-2'>{product.title}</h2>
                            <p className='mt-3'>{product.description}</p>
                            <Button sizeText='text-xl' bgColor='bg-white' textColor='text-brown-primary' />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProductsSection