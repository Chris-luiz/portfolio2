import { useState } from "react";
import { Stepper } from "./Stepper";
import { EXPERIENCIAS } from "../constants/experiencias";
import { Title } from "./Title";

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
        <div className="bg-white dark:bg-gray-900 mb-8">

            <Title
                title="Experiências"
                subTitle="Onde realizei projetos, tanto contratado como estágio"
                titleClasses="text-center"
                subTitleClasses="text-center"
            />

            <div className="px-6">
                <div className="sm:flex gap-4">

                    <Stepper selected={selected} onSelect={setSelected} />

                    <div className="flex flex-col">
                        <img className="object-cover object-center rounded-lg lg:h-[28rem]" src={EXPERIENCIAS[selected].img} alt="Imagem do trabalho" />

                        <div className="flex justify-between mt-4 lg:justify-start">
                            <button onClick={previous} title="left arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-200 border-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button onClick={next} title="right arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-200 border-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 sm:mt-0">
                        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
                            {EXPERIENCIAS[selected].cargo}
                        </h1>
                        <p className="text-1xl font-semibold text-blue-400 ">{EXPERIENCIAS[selected].nomeEmpresa}</p>

                        <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                            {EXPERIENCIAS[selected].responsabilidades}
                        </p>

                        <h3 className="mt-6 text-lg font-medium dark:text-white text-blue-500">Periodo: </h3>
                        <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 inline">
                            {EXPERIENCIAS[selected].periodo}
                        </p>

                        <h3 className="mt-6 text-lg font-medium dark:text-white text-blue-500">Tecnologias Utilizadas:</h3>
                        <ul className="list-inside">
                            {EXPERIENCIAS[selected].tecnologiasUtilizadas.map(tecnologia => (
                                <li key={tecnologia} className="text-gray-600 dark:text-gray-300 list-disc">{tecnologia}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}