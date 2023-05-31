import { Title } from '../components';
import { PrincipaisTecnologias } from '../components/sobreMim';

export const SobreMim = () => {
    return (
        <main id="sobre-mim">
            <div className='w-screen flex justify-center p-2'>
                <div className="dark:bg-gray-700 sm:w-auto lg:w-2/4 container p-4 shadow rounded-lg flex flex-col items-center sm:flex-row gap-4 border dark:border-blue-400">

                    <img src="profile.jpg" alt="foto de perfil" className='w-72 h-72 object-cover rounded-lg' />

                    <div className='flex flex-col p-2'>
                        <Title 
                          title='Christian Luiz de Souza Paes' 
                          subTitle='Desenvolvedor Front-End Jr.'
                        />
                        <br />
                        <p className='dark:text-white'>Tenho 21 anos e sou um desenvolvedor Front-End apaixonado por transformar ideias em realidade. Atualmente minha principal stack se concentra no ecossistema JS, com Node, TypeScript e suas bibliotecas mais famosas (Yup, Axios, React, etc). Curso <strong className='font-bold'>Sistemas de Informação</strong> pela Fametro.</p>
                        <div className='border-t-2 my-5'></div>
                        <PrincipaisTecnologias />
                    </div>
                </div>
            </div>
        </main>
    );
}
