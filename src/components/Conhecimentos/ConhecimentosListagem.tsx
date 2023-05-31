import { CONHECIMENTOS } from "../../constants";
import { ConhecimentoItem } from "./ConhecimentoItem";

export const ConhecimentosListagem = () => {
    return (
        <div className="grid grid-cols-1 gap-12 lg:col-span-2 sm:grid-cols-3">
            {CONHECIMENTOS.map(conhecimento => (
                <ConhecimentoItem
                    icon={conhecimento.icon}
                    lang={conhecimento.lang}
                    text={conhecimento.text}
                />
            ))}
        </div>
    )
}
