import React from 'react';

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='max-w-1216 mx-auto px-8 my-28 text-brown-primary border-t-2 border-x-neutral-300 pt-16 grid gap-10 md:text-lg md:grid-cols-3 lg:mt-36'>
            <div>
                <h3 className='text-black text-xl font-semibold'>Informações</h3>
                <p className='mt-3'>Todos os direitos reservados à Meow Café Ltda.</p>
                <p className='mt-3'>Um lugar perfeito para pais de pets e amantes de café!</p>
                <div className='flex items-center gap-4 mt-5 text-2xl'>
                    <a href="https://github.com/gabrielalencs" target='_blank' rel='noreferrer'>
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/gabrieldealencarr/" target='_blank' rel='noreferrer'>
                        <FaLinkedin />
                    </a>
                </div>
            </div>

            <div>
                <h3 className='text-black text-xl font-semibold'>Links Úteis</h3>
                <ul className='flex flex-col gap-3 mt-5'>
                    <li>
                        <a href="#introduction">Inicio</a>
                    </li>
                    <li>
                        <a href="#products">Produtos</a>
                    </li>
                    <li>
                        <a href="#delivery">Delivery</a>
                    </li>
                    <li>
                        <a href="#about">Sobre</a>
                    </li>
                </ul>
            </div>

            <div>
                <h3 className='text-black text-xl font-semibold'>Institucional</h3>
                <ul className='flex flex-col gap-3 mt-5'>
                    <li>CNPJ: 77.252.901/0321-77</li>
                    <li>Endereço: Rua do MiauMiau 777, Gatolândia</li>
                    <li>Política de Privacidade</li>
                    <li>Dúvida Frequentes</li>
                    <li>Ajuda</li>
                    <li>Acessibilidade</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer