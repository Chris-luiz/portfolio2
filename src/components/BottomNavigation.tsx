import { ReactNode } from 'react';
import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

interface IBottomNavigationIconProps {
    name: string;
    icon: ReactNode;
    href: string;
    classes: string;
}

const BottomNavigationIcon = ({ name, icon, href, classes }: IBottomNavigationIconProps) => {
    return (
        <li className={classes}>
            <a target="_blank" href={href} rel="noreferrer" className='flex flex-col items-center text-sm sm:text-base'>
                {icon}
                {name}
            </a>
        </li>
    );
};

export const BottomNavigation = () => {
    return (
        <ul className="bg-white dark:bg-gray-800 shadow fixed bottom-4 p-4 left-1/2   -translate-x-1/2 rounded-lg flex gap-10 text-gray-700 justify-center">

            <BottomNavigationIcon
                classes=' dark:text-white hover:text-green-500'
                href='https://wa.me/5592981226844'
                icon={<FaWhatsapp className="sm:w-6 sm:h-6" />}
                name='Whatsapp'
            />

            <BottomNavigationIcon
                classes=' dark:text-white hover:text-red-500'
                href="https://mail.google.com/mail/?view=cm&to=christian.luiz.de.sousa@gmail.com&body='Olá, podemos conversar?'"
                icon={<FaEnvelope className="sm:w-6 sm:h-6" />}
                name='Gmail'
            />

            <BottomNavigationIcon
                classes=' dark:text-white hover:text-yellow-500'
                href="https://github.com/Chris-luiz"
                icon={<FaGithub className="sm:w-6 sm:h-6" />}
                name='Github'
            />

            <BottomNavigationIcon
                classes=' dark:text-white hover:text-blue-500'
                href="https://www.linkedin.com/in/christian-luiz-dev/"
                icon={<FaLinkedin className="sm:w-6 sm:h-6" />}
                name='Linkedin'
            />
        </ul>
    );
}
