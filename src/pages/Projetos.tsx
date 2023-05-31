import { Title } from "../components"
import { ProjetosListagem } from "../components/projetos/ProjetosListagem"

export const Projetos = () => {
    return (
        <section id="projetos">
            <div className="flex justify-center flex-col px-12">
                <Title 
                  title="Projetos" 
                  subTitle="Estes são meus principais projetos no GitHub"
                  subTitleClasses="text-center"
                  titleClasses="text-center"
                />
                <ProjetosListagem />
            </div>
        </section>
    )
}