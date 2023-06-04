import { Header } from "../../components/Header";
import { NewTask } from "../../components/NewTask";
import { TaskList } from "../../components/TaskList";
import { HomeContainer } from "./styled";


export function Home() {
    return (
        <div>
            <Header />
            <NewTask />
            <HomeContainer>
                <TaskList />
            </HomeContainer>
        </div>
    )
}