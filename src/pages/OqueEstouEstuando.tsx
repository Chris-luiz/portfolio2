import { ReactNode } from 'react';
import { FaLinux, FaNodeJs, FaVuejs, FaPhp, FaDocker } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiSvelte, SiMysql } from 'react-icons/si';
import { MdArrowForwardIos } from 'react-icons/md'
import './app.css';

interface ToolsProps {
    toolName: string;
    toolIcon: ReactNode;
    text: string;
};

const Tools = ({ toolName, toolIcon, text }: ToolsProps) => {
    return (
        <div className='flex items-center gap-4'>
            <dt>{toolIcon}
                <p className='text-center font-thin'>{toolName}</p>
            </dt>
            <span><MdArrowForwardIos className='text-slate-500 w-4 h-4' /></span>
            <dd className='font-light text-sm'>{text}</dd>
        </div>
    )
}

export const OqueEstouEstudando = () => {
    return (
        <section id="oque-estou-aprendendo">

            <div className='w-screen flex justify-center '>

                <div className='shadow-xl p-4 w-2/3 border rounded-md'>


                    <h1 className='linee text-center font-mono text-2xl text-blue-900'>O que estou estudando?</h1>

                    <dl className='flex flex-col gap-8 '>

                        {/* <Tools 
                      toolName='NodeJs' 
                      toolIcon={<FaNodeJs className='text-green-800 w-16 h-16' />} 
                      text='Estou buscando novos desafios no mundo do Back-End, pois quero ser full-stack um dia, e devido a grande presença do NodeJs no ecossistema do React e outros frameworks, optei por adotar uma stack full Js na minha rotina de desenvolvimento.' 
                    /> */}

                        <div className='flex items-center gap-4'>
                            <dt><FaNodeJs className='text-green-800 w-16 h-16' />
                                <p className='text-center font-thin'>NodeJs</p>
                            </dt>
                            <span><MdArrowForwardIos className='text-slate-500 w-4 h-4' /></span>
                            <dd className='font-light text-sm'>Estou buscando novos desafios no mundo do Back-End, pois quero ser full-stack um dia, e devido a grande presença do NodeJs no ecossistema do React e outros frameworks, optei por adotar uma stack full Js na minha rotina de desenvolvimento.</dd>
                        </div>
                        <div className='flex items-center gap-4'>
                            <dt><TbBrandNextjs className='text-lime-600 w-16 h-16' />
                                <p className='text-center font-thin'>NextJs</p></dt>
                            <span><MdArrowForwardIos className='text-slate-500 w-4 h-4' /></span>
                            <dd className='font-light text-sm'>Em meus estudos de NodeJs encontrei frameworks bem conhecidos como remix e Nest. Optei por estudar NextJs por trabalhar muito bem com react e por sua capacidade de realizar SSR (Server-Side Rendering) de maneira simples.</dd>
                        </div>
                        <div className='flex items-center gap-4'>
                            <dt><FaVuejs className='text-green-600 w-16 h-16' />
                                <p className='text-center font-thin'>VueJs</p></dt>
                            <span><MdArrowForwardIos className='text-slate-500 w-4 h-4' /></span>
                            <dd className='font-light text-sm'>Como desenvolvedor Front-End, acredito ser importantes conhecer outros frameworks do mercado, pois assim poderei tomar uma melhor decisão de qual framework escolher em cada caso, baseado em quais recursos, prós e contras cada um possui. Por isso estou estudando VueJS.</dd>
                        </div>
                        <div className='flex items-center gap-4'>
                            <dt><SiSvelte className='text-orange-600 w-16 h-16' />
                                <p className='text-center font-thin'>Svelte</p></dt>
                            <span><MdArrowForwardIos className='text-slate-500 w-4 h-4' /></span>
                            <dd className='font-light text-sm'>Alem dos motivos citados acima, o Svelte me chamou muito a atenção por ser bem novo e um tanto "diferente". Não usar Virtual Dom e ser compilado me soou divertido e desafiador. Tenho estudado Svelte com uma frequencia bem menor, mas sempre estou atento às novidades.</dd>
                        </div>
                        <div className='flex items-center gap-4'>
                            <dt><FaPhp className='text-indigo-800 w-16 h-16' />
                                <p className='text-center font-thin'>PHP</p></dt>
                            <span><MdArrowForwardIos className='text-slate-500 w-4 h-4' /></span>
                            <dd className='font-light text-sm'>Já possuo experiência em PHP por conta de estágios anteriores. Foi minha principal linguagem por muito tempo, por isso sei me virar facilmente, mesmo não estando no meu dia-a-dia profissional. Então, me mantenho estudando e praticando.</dd>
                        </div>
                        <div className='flex items-center gap-4'>
                            <dt><SiMysql className='text-blue-400 w-16 h-16' />
                                <p className='text-center font-thin'>MySQL</p></dt>
                            <span><MdArrowForwardIos className='text-slate-500 w-4 h-4' /></span>
                            <dd className='font-light text-sm'>Possuo conhecimento e experiencia em MySQL também devido a estagios e projetos anteriores, operações mais casuais como CRUD e modelagem de banco.</dd>
                        </div>
                        <div className='flex items-center gap-4'>
                            <dt><FaDocker className='text-blue-500 w-16 h-16' />
                                <p className='text-center font-thin'>Docker</p></dt>
                            <span><MdArrowForwardIos className='text-slate-500 w-4 h-4' /></span>
                            <dd className='font-light text-sm'>Estou estudando Docker porque atualmente conteinerização é fundamental para se trabalhar em equipes. Estudei principalmente pelos cursos da Udemy do Hora de Codar.</dd>
                        </div>
                        <div className='flex items-center gap-4'>
                            <dt><FaLinux className='text-grey-600 w-16 h-16' />
                                <p className='text-center font-thin'>Linux</p></dt>
                            <span><MdArrowForwardIos className='text-slate-500 w-4 h-4' /></span>
                            <dd className='font-light text-sm'>É o principal Sistema Operacional que uso para desenvolvimento, por isso me mantenho estudando com livros como : "Linux - A Biblia" e "Shell Linux do Aprendiz ao Administrador."</dd>
                        </div>
                    </dl>

                </div>

            </div>
        </section>
    );
}