import styled from "styled-components";

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

export const ButtonContainer = styled.div`
  margin-top: 38px;
  display: flex;
  justify-content: center;
`;