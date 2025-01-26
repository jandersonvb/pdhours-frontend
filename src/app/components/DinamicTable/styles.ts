import styled from "styled-components";

export const TableWrapper = styled.div`
 width: 783px;
  border-collapse: collapse;
  margin-top: 32px;
  font-family: Arial, sans-serif;

  //alinhar a tabela no centro
  margin-left: auto;
  margin-right: auto;  

`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  

  th {
    background-color: #4263eb;
    border: none;

    &:first-child {
      border-top-left-radius: 8px;
    }

    &:last-child {
      border-top-right-radius: 8px;
    }
    color: white;
    padding: 12px;
    font-weight: bold;
  }

  td {
    padding: 12px;
    border-top: 1px solid #ddd;
  }

  tr:hover {
    background-color: #f1f5f9;
  }
`;

