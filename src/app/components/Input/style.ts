import styled from "styled-components";


export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;


`;

export const Label = styled.label`
  font-size: 12px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #ACB5BD
`;

interface StyledInputProps {
  hasError?: boolean;
}


export const StyledInput = styled.input<StyledInputProps>`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ACB5BD;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s ease-in-out;

  ${({ hasError }) => hasError && `
    border-color: #e74c3c;
  `}

  &:focus {
    border-color: #007BFF;
  }
`;
