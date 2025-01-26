'use client'

import { DinamicTable } from "./components/DinamicTable";
import { HoursTable } from "./components/HoursTable";
import { Navbar } from "./components/Navbar";

import { Button } from "./components/Button";
import { Tabs } from "./components/Tabs";
import { DateFilter } from "./components/DateFilter";


const squadHeaders = ["ID", "Nome", ""];
const squadData = [
  ["1", "Squad Alpha",<Button>Visitar squad</Button>], 
  ["2", "Squad Beta", <Button>Visitar squad</Button>],
];

const membersHeaders = ["Membro", "Descrição", "Horas", "Criado em"];
const membersData = [
  ["John Doe", "Desenvolvedor", "8h", "2025-01-26"],
  ["Jane Smith", "Designer", "5h", "2025-01-26"],
];


const members = [
  {
    id: 1,
    name: "João",
    description: "Desenvolvi tal funcionalidade..",
    hours: 8,
    createdAt: new Date(Date.UTC(2022, 5, 1)).toLocaleDateString("pt-BR")
  },
  {
    id: 2,
    name: "Pedro",
    description: "Resolvi um bug na aplicação..",
    hours: 16,
    createdAt: new Date(Date.UTC(2022, 5, 1)).toLocaleDateString("pt-BR")
  },
  {
    id: 3,
    name: "Marcelo Silva",
    description: "Montagem do ambiente..",
    hours: 4,
    createdAt: new Date(Date.UTC(2022, 5, 1)).toLocaleDateString("pt-BR")
  },
];


export default function Home() {
  return (
    <>
      <Navbar />
      <Tabs />
      <DateFilter />
      <HoursTable
        members={members}
      />
      <DinamicTable headers={squadHeaders} data={squadData} />
    </>
  );
}
