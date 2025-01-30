'use client'

import { DinamicTable } from "../components/DinamicTable";
import { Container, Title } from "./style";



const membersHeaders = ["Nome", "Horas", "Squad ID"];
const membersData = [
  ["João", "8", "1"],
  ["Pedro", "16", "2"],
  ["Marcelo Silva", "4", "3"],
];


export default function User() {
  return (
    <Container style={{ alignItems: "center", display: "flex", flexDirection: "column", marginTop: "60px" }}>
      <Title>Lista de Usuários</Title>
      <DinamicTable headers={membersHeaders} data={membersData} />
    </Container>
  );
}