interface IStepperProps {
    selected: number;
    onSelect: (value: number) => void;
}


export const Stepper = ({ selected, onSelect }: IStepperProps) => {

    const isSelected = (value: number): boolean => selected === value ? true : false;
    

    return (
        <ol className="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li className="mb-10 ml-6">
                <label htmlFor="default-radio-1" className={`hover:cursor-pointer font-medium leading-tight ${isSelected(0) && 'text-blue-500'}`}>
                    <div className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                        <input onChange={() => onSelect(0)} id="default-radio-1" type="radio" checked={isSelected(0)}  name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    </div>
                    Estágio Semed
                </label>
            </li>
            <li className="mb-10 ml-6">
                <label htmlFor="default-radio-2" className={`hover:cursor-pointer font-medium leading-tight ${isSelected(1) && 'text-blue-500'}`}>
                    <div className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                        <input onChange={() => onSelect(1)} id="default-radio-2" type="radio" checked={isSelected(1)} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    </div>
                    Estágio SUFRAMA
                </label>
            </li>
            <li className="ml-6">
                <label htmlFor="default-radio-3" className={`hover:cursor-pointer font-medium leading-tight ${isSelected(2) && 'text-blue-500'}`}>
                    <div className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                        <input onChange={() => onSelect(2)} id="default-radio-3" type="radio" checked={isSelected(2)} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    </div>
                    Analista UEA
                </label>
            </li>
        </ol>
    );
}