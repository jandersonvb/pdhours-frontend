'use client';

import { SquadTable } from "../components/SquadTable";
import { Title } from "./style";
import { Container } from "./style";

export default function Squad() {
  return (
    <Container>
      <Title>Lista de Squads</Title>
      <SquadTable />
    </Container>
  );
}
