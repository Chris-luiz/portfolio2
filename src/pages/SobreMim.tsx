import { BsGit } from 'react-icons/bs';
import { SiTypescript, SiJavascript, } from 'react-icons/si'
import { FaReact, FaCss3Alt, FaHtml5 } from 'react-icons/fa'

export const SobreMim = () => {
    return (
        <main id="sobre-mim">
            <div className='w-screen flex justify-center items-center md:mt-28 mt-20'>
                <div className="w-2/3 md:grid grid-cols-4 border shadow-lg md:p-10 xs:p-2 rounded-lg gap-4 ">
                    <div className='col-span-1'>
                        <figure>
                            <img src="profile.jpg" alt="" className='w-56 h-72 object-cover rounded-lg' />
                        </figure>
                    </div>

                    <div className='flex flex-col col-span-3'>
                        <div>
                            <h1 className='text-2xl text-blue-900'>Christian Luiz de Souza Paes</h1>
                            <p className='text-1xl font-mono text-blue-900'>Desenvolvedor Front-End</p>
                            <br />
                            <p className='font-light'>Sou um desenvolvedor Front-End apaixonado por transformar ideias em realidade, combinando habilidades técnicas e criatividade. Estou sempre em busca de novas oportunidades para aperfeiçoar minhas habilidades e trabalhar em projetos desafiadores. Meu objetivo é transformar, aprender e crescer na área. Curso <strong className='font-bold'>Sistemas de Informação</strong> pela Fametro.</p>
                        </div>
                        <div className='border-t-2 my-5'></div>
                        <div className='flex gap-10 justify-around '>
                            <FaHtml5 className='text-gray-800 w-6 h-6 sm:w-10 sm:h-10 hover:fill-orange-600' />
                            <FaCss3Alt className='text-gray-800 w-6 h-6 sm:w-10 sm:h-10 hover:fill-blue-600' />
                            <SiJavascript className='text-gray-800 w-6 h-6 sm:w-10 sm:h-10 hover:fill-yellow-400' />
                            <SiTypescript className='text-gray-800 w-6 h-6 sm:w-10 sm:h-10 hover:fill-blue-600' />
                            <FaReact className='text-gray-800 w-6 h-6 sm:w-10 sm:h-10 hover:fill-cyan-500' />
                            <BsGit className='text-gray-800 w-6 h-6 sm:w-10 sm:h-10 hover:fill-red-600' />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
