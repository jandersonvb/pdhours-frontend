import styled from 'styled-components';

export const ModalContainer = styled.div`
  //no segundo input ter uma margem maior
  display: flex;
  flex-direction: column;
  padding: 20px;

  & > * {
    margin-bottom: 16px;
  }

`;

export const Title = styled.h2`
  font-size: 34px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  color: #1f2937;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface InputProps {
  $hasError: boolean;
}

export const Input = styled.input<InputProps>`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid ${({ $hasError }) => ($hasError ? '#e74c3c' : '#ccc')};
  border-radius: 8px;
  outline: none;
  background: #fff;
`;

export const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 8px;
    font-weight: 500;
    color:#ACB5BD;
    font-family: 'Roboto', sans-serif;
  }
`;

export const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;


  font-weight: 500;
  font-family: 'Roboto', sans-serif;

`;

export const ButtonContainer = styled.div`
  margin-top: 38px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
`;

export const ErrorBox = styled.div`
  background: #fdecea;
  color: #e74c3c; 
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 10px;
`;
