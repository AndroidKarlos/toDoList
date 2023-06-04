import { PlusCircle } from "phosphor-react";
import { FormContainer } from "./styled";


export function NewTask(){
    return(
        <FormContainer>
            <input type="text" placeholder="Adicione uma nova tarefa"/>
            <button>
                Criar
                <PlusCircle size={20} />
            </button>
        </FormContainer>
    )
}