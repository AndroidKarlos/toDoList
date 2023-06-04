import { useState } from 'react';
import { CompletedTask } from "./components/CompletedTask";
import { TaskCreated } from "./components/TaskCreated";
import clipboard from '../../assets/clipboard.svg';
import { EmptyTask, Separetor, TaskContainer, TaskContent, TaskInfo } from "./styled";



export function TaskList() {

    const [task, setTask] = useState([]);

    return (
        <TaskContainer>
            <TaskInfo>
                <TaskCreated />
                <CompletedTask />
            </TaskInfo>
            <Separetor />
            <TaskContent>
                {task ? (
                    <EmptyTask>
                        <img src={clipboard}/>
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </EmptyTask>
                ) : (
                    <>
                    </>
                )}
            </TaskContent>
        </TaskContainer>
    )
}