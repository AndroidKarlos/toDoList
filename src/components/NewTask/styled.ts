import styled from 'styled-components';

export const FormContainer = styled.form`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    gap: 2rem;

    margin-top: -2rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-300']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: ${(props) => props.theme['blue-dark']};
    color: ${(props) => props.theme.white};
    font-size: 1rem;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme.blue};
      color: ${(props) => props.theme.white};
      transition: background-color 0.2s color 0.2s border-color 0.2s;
    }
  }
`

