import { TaskCreatedContainer } from './styled'

interface TaskCreatedProps {
    total?: number;
}

export function TaskCreated({ total }: TaskCreatedProps){
    return(
        <TaskCreatedContainer>
            <p>Tarefas criadas</p>
            <span>{total ? total : 0}</span>
        </TaskCreatedContainer>
    )
}