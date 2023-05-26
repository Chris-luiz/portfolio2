import { useState } from "react";
import { Stepper } from "./Stepper";

interface ICarousel {
    nomeEmpresa: string;
    cargo: string;
    img: string;
    periodo: string;
    tipo: 'estagio' | 'CLT'
    responsabilidades: string;
    tecnologiasUtilizadas: string[];
}

const experiencias: ICarousel[] = [
    {
        cargo: 'Estagiario em Desenvolvimento',
        nomeEmpresa: "Secretaria Municipal de Educação de Manaus (Semed-AM)",
        img: "jobs_images/semed.jpg",
        periodo: "01/2022 - 06/2022",
        tipo: "estagio",
        responsabilidades: "Participei dos projetos de desenvolvimento quesão solicitados ao DGTI; Correção de Bugs e sugestão de melhorias dosprojetos mantidos pela Semed; Solução de tarefas atribuídas; Estudo e aprendizadocontinuo.",
        tecnologiasUtilizadas: ["HTML", "CSS", "JavaScript", "PHP", "Yii2 framework", "Banco de Dados Oracle SQL", "GIT"]
    },
    {
        cargo: 'Estagiario em T.I',
        nomeEmpresa: "Superintendencia da Zona Franca de Manaus (SUFRAMA)",
        img: "jobs_images/suframa.jpg",
        periodo: "01/2022 - 06/2022",
        tipo: "estagio",
        responsabilidades: "Implementação melhorias constantes dos Bancosde Dados implementando Triggers e realizando relatórios através de consultas; Criação deDashboards no Power BI realizando a análise e tratamento de dados.",
        tecnologiasUtilizadas: ["Sistema Open-Source Redmine", "MySQL", "PHPMyAdmin", "Power BI"]
    },
    {
        cargo: 'Analista de Sistemas Jr.',
        nomeEmpresa: "Universidade do Estado do Amazonas",
        img: "jobs_images/uea.jpg",
        periodo: "06/2022 - 06/2023",
        tipo: "CLT",
        responsabilidades: "Fui responsavel pela elaboração e criação do Front-End das aplicações RU-Admin e RU-Caixa; Elaborei a construção do Front-End para se comunicar e consumir API's da UEA; Participei de reuniões e levantamento de requisitos e regra de negocio",
        tecnologiasUtilizadas: ["React", "Typescript", "Cypress", "Git", "GitLab", "Docker"]
    },
]

export const Carousel = () => {

    const [selected, setSelected] = useState(0);

    const next = () => {
        if (selected === 2) {
            setSelected(0);
        } else {
            setSelected(prev => prev + 1);
        }
    };

    const previous = () => {
        if (selected === 0) {
            setSelected(2);
        } else {
            setSelected(prev => prev - 1);
        }
    };

    return (
        <div className="bg-white dark:bg-gray-900 m-20">
            <h1 className="text-center text-3xl font-mono text-blue-900 ">Experiências</h1>
            <p className="text-center text-2xl text-blue-400 mb-4">Onde realizei projetos, tanto contratado como estágio</p>

            <div className="container px-6 mx-auto">
                <div className="lg:-mx-6 lg:flex lg:items-center gap-5">

                    <Stepper selected={selected} onSelect={setSelected} />

                    <div className="flex flex-col justify-center">
                        <img className="object-cover object-center max-w- max-h-md lg:w-fit w-full rounded-lg lg:h-[28rem]" src={experiencias[selected].img} alt="" />

                        <div className="flex items-center justify-between mt-4 lg:justify-start">
                            <button onClick={previous} title="left arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button onClick={next} title="right arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">

                        <p className="text-2xl font-semibold text-blue-500 lg:w-96">{experiencias[selected].nomeEmpresa}</p>

                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                            {experiencias[selected].cargo}
                        </h1>

                        <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                            {experiencias[selected].responsabilidades}
                        </p>

                        <h3 className="mt-6 text-lg font-medium text-blue-500">Periodo: </h3>
                        <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 inline">
                            {experiencias[selected].periodo}
                        </p>

                        <h3 className="mt-6 text-lg font-medium text-blue-500">Tecnologias Utilizadas:</h3>
                        {experiencias[selected].tecnologiasUtilizadas.map(tecnologia => (
                            <li key={tecnologia} className="text-gray-600 dark:text-gray-300">{tecnologia}</li>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}