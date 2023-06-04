import styled from "styled-components";

export const TaskContainer = styled.div``;


export const TaskInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 1.5rem;
`;

export const Separetor = styled.hr`
    background-color: ${(props) => props.theme["gray-300"]};
    border-width: 1px;
    
`;

export const TaskContent = styled.div``;

export const EmptyTask = styled.div`
    width: 100% ;
    height: 300px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    img {
        margin-bottom: 1.5rem;
    }

    p:nth-of-type(1) {
        font-size: 1rem;
        font-weight: 700;
        color: ${(props) => props.theme["gray-300"]};
    }

    p:nth-of-type(2){
        font-weight: 400;
    }
`;

