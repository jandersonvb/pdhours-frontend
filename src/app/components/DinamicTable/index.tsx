import React from 'react';
import { Table, TableWrapper } from "./styles";

type DinamicTableProps = {
  headers: string[];
  data: (string | React.ReactNode)[][];
};

export function DinamicTable({ headers, data }: DinamicTableProps) {
  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
}