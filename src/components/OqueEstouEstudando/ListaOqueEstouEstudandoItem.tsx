import { MdArrowForwardIos } from "react-icons/md"
import { ToolsProps } from "../../types"

export const ListaOqueEstouEstudandoItem = ({ toolName, toolIcon, text }: ToolsProps) => {
    return (
        <div className='flex flex-col items-center gap-2 sm:flex-row'>
            <dt>{toolIcon}
                <p className='text-center font-medium dark:text-white'>{toolName}</p>
            </dt>
            <span>
                <MdArrowForwardIos className='hidden sm:block text-slate-500 w-4 h-4' />
            </span>
            <dd className='text-justify sm:text-left text-sm sm:text-base text-gray-500 dark:text-gray-400'>{text}</dd>
        </div>

    )
}
