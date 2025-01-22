import styled from "styled-components";

export const TableContainer = styled.table`
  width: 783px;
  border-collapse: collapse;
  margin-top: 32px;
  font-family: Arial, sans-serif;

  //alinhar a tabela no centro
  margin-left: auto;
  margin-right: auto;  
`;

export const TableHead = styled.thead`
  background-color: #4263eb; /* Azul para o cabeçalho */
  color: #ffffff; /* Texto branco no cabeçalho */
 
`;

export const TableBody = styled.tbody`
  background-color: #ffffff;
`;

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #f7f9fc; /* Fundo alternado */
    
  }
`;

export const TableHeader = styled.th`
  padding: 10px 20px;
  color: #ffffff; /* Texto branco no cabeçalho */
  text-align: left;
  font-weight: bold;
  border: 1px solid #e2e8f0;
  background-color: #4263eb; 

  border: none;

  &:first-child {
    border-top-left-radius: 8px;
  }

  &:last-child {
    border-top-right-radius: 8px;
  }
`;

export const TableCell = styled.td`
  padding: 10px 20px;
  color: #2d3748;
  text-align: left;
  border: 1px solid #e2e8f0;
`;
