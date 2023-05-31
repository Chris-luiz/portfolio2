import { Title } from "../components";
import { ConhecimentosContainer, ConhecimentosListagem } from "../components/Conhecimentos";

export const Conhecimentos = () => {
    return (
        <ConhecimentosContainer>

            <Title
                title="Conhecimentos"
                subTitle="ferramentas e linguagens"
                legend="Essas são algumas linguagens e ferramentas que conheço e utilizo."
            />

            <ConhecimentosListagem />
        </ConhecimentosContainer>

    );
}