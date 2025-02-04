import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  
`;

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 700;
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 16px;

  & > button {
    margin-top: 24px;
    width: 100%;
  }
`;




export const TableContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 800px;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;


  & > button {
    margin-top: 64px;
  }

`;

export const Table = styled.table`
  width: 100%;  
  

  thead {
    background: #f4f5f7;
    
  }

  tbody tr:nth-child(odd) {
    background: #f9f9f9;
    
  }

  tbody tr:hover {
    background: #f0f0f0;
  }

  th, td {
    padding: 12px;
    
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    text-align: center;  

  }


  th:first-child, td:first-child {
    border-radius: 8px 0 0 0;
  }

  th:last-child, td:last-child {
    border-radius: 0 8px 0 0;
  }

  th:not(:first-child):not(:last-child), td:not(:first-child):not(:last-child) {
    border-radius: 0;
  }
`;

export const Th = styled.th`
  background: #4f6ef7;
  color: white;
  padding: 12px;
  text-align: center;
  border-radius: 8px 8px 0 0;
 
`;

export const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #eee;

  &:last-child {
    text-align: center;
  }

  
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;