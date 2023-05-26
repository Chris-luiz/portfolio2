import { Card } from "../components"
import { PROJETOS } from "../constants/projetos"

export const Projetos = () => {
    return (
        <section id="projetos">
            <div className="flex justify-center flex-col px-12 py-12">
                <h1 className="text-2xl text-gray-700 text-center m-20">Projetos</h1>
                <div className="flex gap-4 flex-wrap justify-center">
                    {PROJETOS.map(project => (
                        <Card
                            key={project.nome}
                            nome={project.nome}
                            img={project.img}
                            description={project.description}
                            githubLink={project.githubLink}
                            langUser={project.langUser}
                            url={project.url}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}