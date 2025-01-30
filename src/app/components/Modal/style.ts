import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  margin-top: 32px;

  button {
    padding: 14px 24px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: #0056D2;
    color: #ffffff;
    
    align-self: flex-end;

    &:hover {
      background-color: #2342C0;
    }
  }

`;