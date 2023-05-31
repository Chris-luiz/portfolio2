import { ListaOqueEstouEstudando, Title } from '../components';
import './app.css';

export const OqueEstouEstudando = () => {
    return (
        <section id="oque-estou-aprendendo">

            <div className='w-screen flex justify-center py-12 dark:dark:bg-gray-900'>

                <div className='p-4 container'>
                    <Title titleClasses='linee text-center' title='O que estou estudando?' />
                    <ListaOqueEstouEstudando />
                </div>

            </div>
            
        </section>
    );
}
