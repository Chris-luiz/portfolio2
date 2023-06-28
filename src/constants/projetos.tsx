import { ICardProps } from "../components";

export const PROJETOS: ICardProps[] = [
    {
        nome: "Desafio Pontos na Tela",
        img: "projects_images/dots-at-screen.png",
        description: "Projeto front-end usado em entrevista que encontrei no canal Front-End Begginer. Consiste em criar um circulo no local clicado pelo mouse. Link: https://www.youtube.com/watch?v=dOsBtM2U018",
        url: "https://chris-luiz.github.io/click-and-enjoy/",
        githubLink: "https://github.com/Chris-luiz/click-and-enjoy",
        langUser: ["React, ", "Typescript"],
    },
    {
        nome: "Costs",
        img: "projects_images/Screenshot from 2023-06-28 13-15-47.png",
        description: "Projeto crud de servicos com front-end e back-end conteinerizado em docker.",
        githubLink: "https://github.com/Chris-luiz/costs",
        langUser: ["React, ", "Typescript, NodeJs, docker, mysql"],
    }
]