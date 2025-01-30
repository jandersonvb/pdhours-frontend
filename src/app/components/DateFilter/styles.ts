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


  




`
export const WrapperStartDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  label {
    color: #9CA3AF;
    font-size: 14px;
  
  }

  input {
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #D1D5DB;
    font-size: 16px;
    color: #1F2937;
     
  }
`

export const WrapperEndDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    color: #9CA3AF;
    font-size: 14px;
  }

  input {
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #D1D5DB;
    font-size: 16px;
    color: #1F2937;
     
  }
`
