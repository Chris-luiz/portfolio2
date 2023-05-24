export const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="container p-6 mx-auto">
                <div className="lg:flex lg:justify-between">
                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <h3 className="text-gray-700 uppercase dark:text-white">Contato</h3>
                        <div className="">
                            <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+55 (92) 98122-6844</span>
                            <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">chrisitan.luiz.de.sousa@gmail.com</span>
                            <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">linkedin.com/in/christian-luiz-dev/</span>
                        </div>
                    </div>
                </div>

                <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

                <div>
                    <p className="text-center text-gray-500 dark:text-gray-400">Desenvolvido por Christian Luiz de Souza Paes | Manaus-AM</p>
                </div>
            </div>
        </footer>
    )
}