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

            <div className="flex items-center px-6 py-3 bg-gray-900">
                <svg aria-label="headphones icon" className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z" />
                </svg>

                <h1 className="mx-3 text-lg font-semibold text-white">{nome}</h1>
            </div>

            <div className="px-6 py-4">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white"></h1>

                <p className="py-2 text-gray-700 dark:text-gray-400">{description}</p>

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