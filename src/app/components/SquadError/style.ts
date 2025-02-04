import styled from "styled-components";

export const Container = styled.div`
  //alinhar tudo no centro
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  gap: 10px;


  //estilizar o icone
  svg {
    color: #ACB5BD;
  }


 
`

export const Title = styled.h1`
  font-size: 24px;
  color: #ACB5BD;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  

`
