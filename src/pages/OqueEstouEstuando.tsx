import { TECNOLOGIAS_ESTUDADAS } from '../constants/oqueEstouEstudando';
import { Tools } from '../components/Tools';
import './app.css';

export const OqueEstouEstudando = () => {
    return (
        <section id="oque-estou-aprendendo">

            <div className='w-screen flex justify-center px-6 py-12'>

                <div className='shadow-xl p-4 xs:mx-4 xs:mb-4 sm:w-2/3 border rounded-md'>

                    <h1 className='linee text-center font-mono text-2xl text-blue-900'>O que estou estudando?</h1>

                    <dl className='flex flex-col gap-8 '>
                        {TECNOLOGIAS_ESTUDADAS.map(tecnologia => (
                            <Tools key={tecnologia.nome} toolName={tecnologia.nome} toolIcon={tecnologia.icon} text={tecnologia.text} />
                        ))}
                    </dl>
                </div>

            </div>
            
        </section>
    );
}