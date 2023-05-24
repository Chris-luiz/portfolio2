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

interface ITecnologias {
    nome: string;
    icon: ReactNode;
    text: string;
}

const tecnologiasEstudadas: ITecnologias[] = [
    {
        icon: <FaNodeJs className='text-green-800 w-16 h-16' />,
        nome: 'NodeJs',
        text: 'Estou buscando novos desafios no mundo do Back-End, pois quero ser full-stack um dia, e devido a grande presença do NodeJs no ecossistema do React e outros frameworks, optei por adotar uma stack full Js na minha rotina de desenvolvimento.',
    },
    {
        icon: <TbBrandNextjs className='text-lime-600 w-16 h-16' />,
        nome: 'NextJs',
        text: 'Em meus estudos de NodeJs encontrei frameworks bem conhecidos como remix e Nest. Optei por estudar NextJs por trabalhar muito bem com react e por sua capacidade de realizar SSR (Server-Side Rendering) de maneira simples.',
    },
    {
        icon: <FaVuejs className='text-green-600 w-16 h-16' />,
        nome: 'VueJs',
        text: 'Como desenvolvedor Front-End, acredito ser importantes conhecer outros frameworks do mercado, pois assim poderei tomar uma melhor decisão de qual framework escolher em cada caso, baseado em quais recursos, prós e contras cada um possui. Por isso estou estudando VueJS.',
    },
    {
        icon: <SiSvelte className='text-orange-600 w-16 h-16' />,
        nome: 'Svelte',
        text: 'Alem dos motivos citados acima, o Svelte me chamou muito a atenção por ser bem novo e um tanto "diferente". Não usar Virtual Dom e ser compilado me soou divertido e desafiador. Tenho estudado Svelte com uma frequencia bem menor, mas sempre estou atento às novidades.',
    },
    {
        icon: <FaPhp className='text-indigo-800 w-16 h-16' />,
        nome: 'PHP',
        text: 'Já possuo experiência em PHP por conta de estágios anteriores. Foi minha principal linguagem por muito tempo, por isso sei me virar facilmente, mesmo não estando no meu dia-a-dia profissional. Então, me mantenho estudando e praticando.',
    },
    {
        icon: <SiMysql className='text-blue-400 w-16 h-16' />,
        nome: 'MySQL',
        text: 'Possuo conhecimento e experiencia em MySQL também devido a estagios e projetos anteriores, operações mais casuais como CRUD e modelagem de banco.',
    },
    {
        icon: <FaDocker className='text-blue-500 w-16 h-16' />,
        nome: 'Docker',
        text: 'Estou estudando Docker porque atualmente conteinerização é fundamental para se trabalhar em equipes. Estudei principalmente pelos cursos da Udemy do Hora de Codar.',
    },
    {
        icon: <FaLinux className='text-grey-600 w-16 h-16' />,
        nome: 'Linux',
        text: 'É o principal Sistema Operacional que uso para desenvolvimento, por isso me mantenho estudando com livros como : "Linux - A Biblia" e "Shell Linux do Aprendiz ao Administrador.',
    },
]

const Tools = ({ toolName, toolIcon, text }: ToolsProps) => {
    return (
        <div className='flex items-center xs:flex-col sm:flex-row gap-4'>
            <dt>{toolIcon}
                <p className='text-center font-thin'>{toolName}</p>
            </dt>
            <span><MdArrowForwardIos className='xs:hidden sm:block text-slate-500 w-4 h-4' /></span>
            <dd className='font-light text-sm'>{text}</dd>
        </div>
    )
}

export const OqueEstouEstudando = () => {
    return (
        <section id="oque-estou-aprendendo">

            <div className='w-screen flex justify-center '>

                <div className='shadow-xl p-4 xs:mx-4 xs:mb-4 sm:w-2/3 border rounded-md'>

                    <h1 className='linee text-center font-mono text-2xl text-blue-900'>O que estou estudando?</h1>

                    <dl className='flex flex-col gap-8 '>
                        {tecnologiasEstudadas.map(tecnologia => (
                            <Tools key={tecnologia.nome} toolName={tecnologia.nome} toolIcon={tecnologia.icon} text={tecnologia.text} />
                        ))}
                    </dl>
                </div>

            </div>
            
        </section>
    );
}