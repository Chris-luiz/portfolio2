import { ToolsKnowledge } from "../components/ToolsKnowledge";
import { CONHECIMENTOS } from "../constants";

export const Conhecimentos = () => {
    return (
        <section id='conhecimentos' className="bg-white dark:bg-gray-900">
            <div className="border-l-4 pl-4 border-blue-400 rounded-sm container flex flex-col gap-10 px-6 mx-auto justify-center">
                <div> 
                    <h1 className="mt-2 text-2xl font-mono text-blue-800 md:text-3xl dark:text-white">Conhecimentos</h1>
                    <p className="font-medium text-blue-500 dark:text-blue-400">ferramentas e linguagens</p>

                    <p className="mt-3 text-gray-500 dark:text-gray-400">Essas são algumas linguagens e ferramentas que conheço e utilizo.</p>
                </div>

                <div className="shadow-sm rounded-sm grid grid-cols-1 gap-12 lg:col-span-2 sm:grid-cols-3">
                    {CONHECIMENTOS.map(conhecimento => (
                        <ToolsKnowledge
                            icon={conhecimento.icon}
                            lang={conhecimento.lang}
                            text={conhecimento.text}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}