import { TbWorld } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs'

export interface ICardProps {
    nome: string;
    img: string;
    description: string;
    githubLink: string;
    url?: string;
    langUser: string[]
}

export const Card = ({ nome, img, description, githubLink, langUser, url }: ICardProps) => {
    return (
        <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img className="object-cover object-center w-full h-40" src={img} alt="avatar" />

            <div className="p-2 py-4">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{nome}</h1>

                <p className="text-gray-700 dark:text-gray-400 text-sm">{description}</p>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <FaGithub className="h-6 w-6" />
                    <a href={githubLink} target='_blank' rel='noreferrer' className="hover:text-blue-400 px-2 text-sm">{githubLink}</a>
                </div>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <TbWorld className="h-6 w-6" />
                    <a href={url} target='_blank' rel='noreferrer' className="hover:text-blue-400 px-2 text-sm">{url}</a>
                </div>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <BsCodeSlash className="h-6 w-6" />
                    <h1 className="px-2 text-sm">{langUser}</h1>
                </div>
            </div>
        </div>
    );
}