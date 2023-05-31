import { PROJETOS } from "../../constants/projetos"
import { Card } from "./Card"

export const ProjetosListagem = () => {
    return (
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
    )
}