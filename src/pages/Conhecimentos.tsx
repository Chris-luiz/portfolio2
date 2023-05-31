import { Title } from "../components";
import { ToolsKnowledge } from "../components/ToolsKnowledge";
import { CONHECIMENTOS } from "../constants";

export const Conhecimentos = () => {
    return (
        <section id='conhecimentos'>
            <div className="bg-white dark:bg-gray-900 border-l-4 pl-4 border-blue-400 rounded-sm container flex flex-col gap-10 px-6 py-12 mx-auto justify-center">

                <Title 
                  title="Conhecimentos"
                  subTitle="ferramentas e linguagens"
                  legend="Essas são algumas linguagens e ferramentas que conheço e utilizo."
                
                />

                <div className="grid grid-cols-1 gap-12 lg:col-span-2 sm:grid-cols-3">
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