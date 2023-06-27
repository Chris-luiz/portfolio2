import { BsGit } from 'react-icons/bs';
import { SiTypescript, SiMysql } from 'react-icons/si'
import { FaReact, FaNodeJs, FaDocker } from 'react-icons/fa'

export const PrincipaisTecnologiasIcones = () => {
  return (
    <div className='flex gap-6 justify-around mt-5 lg:justify-start lg:gap-10'>
      <SiTypescript className='dark:text-white text-gray-800 w-6 h-6 sm:w-10 sm:h-10 hover:fill-blue-400' />
      <FaReact className='dark:text-white text-gray-800 w-6 h-6 sm:w-10 sm:h-10 hover:fill-cyan-500' />
      <BsGit className='dark:text-white text-gray-800 w-6 h-6 sm:w-10 sm:h-10 hover:fill-red-500' />
      <FaNodeJs className='dark:text-white text-gray-800 w-6 h-6 sm:w-10 sm:h-10 hover:fill-green-800' />
      <SiMysql className='dark:text-white text-gray-800 w-6 h-6 sm:w-10 sm:h-10 hover:fill-sky-400' />
      <FaDocker className='dark:text-white text-gray-800 w-6 h-6 sm:w-10 sm:h-10 hover:fill-sky-600' />
    </div>
  )
}