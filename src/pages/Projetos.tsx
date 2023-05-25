import { Card, ICardProps } from "../components/Card"

const projects: ICardProps[] = [
    {
        nome: "react-challenge-dots-at-screen",
        img: "projects_images/dots-at-screen.png",
        description: "Projeto front-end usado em entrevista que encontrei no canal Front-End Begginer. Consiste em criar um circulo no local clicado pelo mouse. Link: https://www.youtube.com/watch?v=dOsBtM2U018",
        url: "https://chris-luiz.github.io/click-and-enjoy/",
        githubLink: "https://github.com/Chris-luiz/click-and-enjoy",
        langUser: ["React, ", "Typescript"],
    },
    {
        nome: "",
        img: "",
        description: "",
        githubLink: "",
        langUser: [""],
    },
]

export const Projetos = () => {
    return (
        <section id="projetos">
            <h1 className="text-2xl text-gray-700 text-center">Projetos</h1>
            <div className="flex gap-4 flex-wrap justify-center">
                {projects.map(project => (
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