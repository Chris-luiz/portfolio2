import { Card, Title } from "../components"
import { PROJETOS } from "../constants/projetos"

export const Projetos = () => {
    return (
        <section id="projetos">
            <div className="flex justify-center flex-col px-12">
                <Title 
                  title="Projetos" 
                  subTitle="Estes são meus principais projetos no GitHub"
                  subTitleClasses="text-center"
                  titleClasses="text-center"
                />
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