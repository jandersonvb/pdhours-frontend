import styled from "styled-components";

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
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
`;

export const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #eee;

  &:last-child {
    text-align: right;
  }

  
`;