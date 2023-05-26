import { Card } from "../components"
import { PROJETOS } from "../constants/projetos"

export const Projetos = () => {
    return (
        <section id="projetos">
            <h1 className="text-2xl text-gray-700 text-center">Projetos</h1>
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
        </section>
    )
}