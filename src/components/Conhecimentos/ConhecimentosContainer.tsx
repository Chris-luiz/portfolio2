import { PropsWithChildren } from "react"

export const ConhecimentosContainer = ({children}: PropsWithChildren) => {
    return (
        <section id='conhecimentos'>
            <div className="bg-white dark:bg-gray-900 sm:border-l-4 pl-4 sm:border-blue-400 rounded-sm container flex flex-col gap-10 mx-auto px-6  justify-center">
                {children}
            </div>
        </section>
    )
}