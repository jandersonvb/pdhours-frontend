import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const ContainerLogo = styled.div`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #ACB5BD
  
`;

