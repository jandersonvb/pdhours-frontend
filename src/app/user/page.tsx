'use client'

import { Button } from "../components/Button";
import { DateFilter } from "../components/DateFilter";
import { DinamicTable } from "../components/DinamicTable";
import { Navbar } from "../components/Navbar";
import { Tabs } from "../components/Tabs";
import GlobalStyles from "../styles/global";



const membersHeaders = ["Membro", "Descrição", "Horas", "Squad ID"];
const membersData = [
  ["João", "Desenvolvi tal funcionalidade..", "8", "1"],
  ["Pedro", "Resolvi um bug na aplicação..", "16", "2"],
  ["Marcelo Silva", "Montagem do ambiente..", "4", "3"],
];


export default function User() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Tabs />
      <DinamicTable headers={membersHeaders} data={membersData} />

    </>
  );
}