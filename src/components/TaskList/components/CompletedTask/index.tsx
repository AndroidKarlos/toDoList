import { CompletedTaskContainer } from './styled'

interface TaskCreatedProps {
    total?: number;
}

export function CompletedTask({ total }: TaskCreatedProps){
    return(
        <CompletedTaskContainer>
            <p>Concluídas</p>
            <span>{total ? total : 0}</span>
        </CompletedTaskContainer>
    )
}