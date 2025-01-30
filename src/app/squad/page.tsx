'use client'

import { Button } from "../components/Button";
import { DateFilter } from "../components/DateFilter";
import { DinamicTable } from "../components/DinamicTable";
import { Navbar } from "../components/Navbar";
import { Tabs } from "../components/Tabs";
import GlobalStyles from "../styles/global";
import { Container, Title } from "./style";



const membersHeaders = ["Nome", "Horas", "Squad ID"];
const membersData = [
  ["João", "8", "1"],
  ["Pedro", "16", "2"],
  ["Marcelo Silva", "4", "3"],
];

const squadHeaders = ["ID", "Nome", ""];
const squadData = [
  ["1", "Squad Alpha", <Button>Visitar squad</Button>],
  ["2", "Squad Beta", <Button>Visitar squad</Button>],
];


export default function Squad() {
  return (
    <Container>
      <Title>Lista de Squads</Title>
      <DinamicTable headers={squadHeaders} data={squadData} />
    </Container>
  );
}
