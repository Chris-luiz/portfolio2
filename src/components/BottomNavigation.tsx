import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export const BottomNavigation = () => {
    return (
        <ul className="shadow fixed bottom-4 left-1/2 transform -translate-x-1/2  border border-solid p-4 rounded-lg flex gap-10 text-gray-700 justify-center">

            <li className="hover:text-green-500 hover:fill-green-500">
                <a target="_blank" href="https://wa.me/5592981226844" rel="noreferrer" className='flex flex-col items-center'>
                    <FaWhatsapp className=" w-6 h-6" />
                    Whatsapp
                </a>
            </li>

            <li className="hover:text-red-500 hover:fill-red-500">
                <a rel="noreferrer" target="_blank" href="https://mail.google.com/mail/?view=cm&to=christian.luiz.de.sousa@gmail.com&body='Olá, podemos conversar?'" className='flex flex-col items-center'>
                    <FaEnvelope className=" w-6 h-6" />
                    Gmail
                </a>
            </li>

            <li className="hover:text-yellow-500 hover:fill-yellow-500">
                <a rel="noreferrer" target="_blank" href="https://github.com/Chris-luiz" className='flex flex-col items-center'>
                    <FaGithub className=" w-6 h-6" />
                    Github
                </a>
            </li>

            <li className="hover:text-blue-500 hover:fill-blue-500">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/christian-luiz-dev/" className='flex flex-col items-center'>
                    <FaLinkedin className=" w-6 h-6" />
                    Linkedin
                </a>
            </li>
        </ul>
    );
}