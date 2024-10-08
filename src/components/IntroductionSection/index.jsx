import imageHero from '../../assets/images/header-bg.svg';

const IntroductionSection = () => {
    return (
        <section className='mt-5 px-8 relative lg:mt-16 lg:flex lg:justify-between' id='introduction'>
            <div className='max-w-550 mx-auto text-center z-10 lg:text-left lg:w-485 lg:mx-0 text-brown-primary'>
                <h2 className='text-xl font-semibold lg:text-2xl'>Sabor inesquecível</h2>
                <h1 className='text-5xl font-bold relative right-1.5 lg:text-7xl'>Meow Café</h1>
                <p className='mt-6 leading-7 md:text-lg lg:pr-24 xl:pr-0'>
                    Um lugar perfeito para pais de pets e amantes de café. Nossa cafeteria tem um espaço confortável para você e seu melhor amigo.
                </p>
            </div>

            <div className='hidden absolute top-[-260] right-0 z-0 lg:block'>
                <img src={imageHero} alt="imagem de um gato atrás de um copo com café" />
            </div>
        </section>
    )
}

export default IntroductionSection