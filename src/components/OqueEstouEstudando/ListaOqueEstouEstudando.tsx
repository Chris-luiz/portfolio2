import { TECNOLOGIAS_ESTUDADAS } from "../../constants"
import { ListaOqueEstouEstudandoItem } from "./ListaOqueEstouEstudandoItem"

export const ListaOqueEstouEstudando = () => {
  return (
    <dl className='grid grid-cols-1 gap-8 '>
      {TECNOLOGIAS_ESTUDADAS.map(tecnologia => (
        <ListaOqueEstouEstudandoItem 
          key={tecnologia.nome} 
          toolName={tecnologia.nome} 
          toolIcon={tecnologia.icon} 
          text={tecnologia.text} 
        />
      ))}
    </dl>
  )
}