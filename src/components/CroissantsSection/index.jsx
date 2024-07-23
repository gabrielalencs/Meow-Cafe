import imageCroissant from '../../assets/images/croissant.svg';

const CroissantsSection = () => {
    return (
        <section className='mt-28 lg:flex lg:justify-between lg:items-center'>
            <div className='px-8 text-center max-w-525 mx-auto lg:text-left lg:max-w-full lg:mx-0 lg:flex-1'>
                <div className='bg-white px-4 py-2 w-max text-lg rounded-full text-rose-primay font-medium shadow-lg hidden lg:block'>
                    <span>R$ 12,00</span>
                </div>
                <h2 className='mt-3 text-brown-primary text-4xl font-bold md:text-5xl lg:text-7xl lg:relative lg:right-1 xl:text-8xl'>Croissants</h2>
                <h3 className='text-brown-primary text-lg font-bold mt-4 lg:text-3xl xl:text-4xl'>Conheça nossa receita</h3>
                <p className='mt-4 md:text-lg'>A nossa receita de Croissant vai te surpreender. Croissants clássicos ou recheados!</p>
            </div>

            <div className='mt-3 lg:flex-1'>
                <img src={imageCroissant} alt="imagem de um croissant" className='w-9/12 mx-auto max-w-525 lg:max-w-full lg:w-10/12' />
            </div>
        </section>
    )
}

export default CroissantsSection