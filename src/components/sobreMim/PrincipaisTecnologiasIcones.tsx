import { BsGit } from 'react-icons/bs';
import { SiTypescript, SiJavascript, } from 'react-icons/si'
import { FaReact, FaCss3Alt, FaHtml5 } from 'react-icons/fa'

export const PrincipaisTecnologiasIcones = () => {
  return (
    <div className='flex gap-10 justify-around '>
      <FaHtml5 className='dark:text-white text-gray-800 w-6 h-6 sm:w-10 sm:h-10 hover:fill-orange-600' />
      <FaCss3Alt className='dark:text-white text-gray-800 w-6 h-6 sm:w-10 sm:h-10 hover:fill-sky-500' />
      <SiJavascript className='dark:text-white text-gray-800 w-6 h-6 sm:w-10 sm:h-10 hover:fill-yellow-400' />
      <SiTypescript className='dark:text-white text-gray-800 w-6 h-6 sm:w-10 sm:h-10 hover:fill-blue-400' />
      <FaReact className='dark:text-white text-gray-800 w-6 h-6 sm:w-10 sm:h-10 hover:fill-cyan-500' />
      <BsGit className='dark:text-white text-gray-800 w-6 h-6 sm:w-10 sm:h-10 hover:fill-red-500' />
    </div>
  )
}