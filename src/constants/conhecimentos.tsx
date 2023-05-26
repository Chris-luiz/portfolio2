import { TToolsKnowledgeProps } from "../types"
import { FaDocker, FaLaravel, FaLinux, FaPhp, FaSass } from "react-icons/fa"
import { DiIllustrator, DiPhotoshop, DiYii } from "react-icons/di"
import { SiCypress, SiMysql, SiStyledcomponents } from "react-icons/si"

export const CONHECIMENTOS: TToolsKnowledgeProps[] = [
    {
        icon: <FaPhp className="text-blue-800 w-16 h-16" />,
        lang: "PHP",
        text: `Utilizei muito quando estagiário no desenvolvimento de aplicações Full-Stack. Alem de uma ótima solução back-end.`
    },
    {
        icon: < FaLaravel className="text-red-600 w-16 h-16" />,
        lang: "Laravel",
        text: `Utilizei Laravel em cursos e depois estudei por conta própria.`
    },
    {
        icon: <DiYii className="text-green-600 w-16 h-16" />,
        lang: "Yii2",
        text: `Framework PHP que utilizei muito quando estagiava na secretaria de Manaus.`
    },
    {
        icon: <SiMysql className="text-blue-500 w-16 h-16" />,
        lang: "MySQL",
        text: `SGBD utilizado para armazenar dados. Uso principalmente junto com PHP em apps Full-Stack.`
    },
    {
        icon: <FaDocker className="text-blue-400 w-16 h-16" />,
        lang: "Docker",
        text: `Uso para desenvolver em ambiente conteinerizado. Ótimo para trabalhos em equipe.`
    },
    {
        icon: <SiCypress className="text-cyan-600 w-16 h-16" />,
        lang: "Cypress",
        text: `Utilizo Cypress para testes tanto E2E quando Unitário.`
    },
    {
        icon: <DiPhotoshop className="text-blue-900 w-16 h-16" />,
        lang: "PhotoShop",
        text: `Minha principal ferramenta para edição e retoque de imagens.`
    },
    {
        icon: <DiIllustrator className="text-orange-600 w-16 h-16" />,
        lang: "Illustrator",
        text: `Utilizo para criar mocks de telas e ilustrações.`
    },
    {
        icon: <FaLinux className="text-gray-800 w-16 h-16" />,
        lang: "Linux",
        text: `Principal OS que uso para desenvolver.`
    },
    {
        icon: <FaSass className="text-pink-600 w-16 h-16" />,
        lang: "Sass",
        text: `É um pre-processador CSS MUITO valioso. Acelera a estilização de componentes e telas, alem de evitar a repetição do código. `
    },
    {
        icon: <SiStyledcomponents className="text-pink-400 w-16 h-16" />,
        lang: "Styled Components",
        text: `Ótima lib JS para trabalhar com componentes em React.`
    }    
];

