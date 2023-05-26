import { MdArrowForwardIos } from "react-icons/md"
import { ToolsProps } from "../types"

export const Tools = ({ toolName, toolIcon, text }: ToolsProps) => {
    return (
        <div className='flex items-center xs:flex-col sm:flex-row gap-4'>
            <dt>{toolIcon}
                <p className='text-center font-thin'>{toolName}</p>
            </dt>
            <span><MdArrowForwardIos className='xs:hidden sm:block text-slate-500 w-4 h-4' /></span>
            <dd className='font-light text-sm'>{text}</dd>
        </div>
    )
}