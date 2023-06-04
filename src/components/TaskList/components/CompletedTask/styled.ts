import styled from "styled-components";

export const CompletedTaskContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;

    p {
        font-size: 0.875rem;
        color: ${(props) => props.theme.purple};
        font-weight: 700;
    }

    span {
        display: flex;
        width: 25px;
        height: 19px;
        justify-content: center;
        align-items: center;
        background: ${(props) => props.theme["gray-400"]};
        border-radius: 999px;

        color: ${(props) => props.theme.white};
        font-size: 0.875rem;
        font-weight: 700;
    }
`;