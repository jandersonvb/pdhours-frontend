'use client';

import { Container, Title } from "./style";
import { SquadTable } from "../components/SquadTable";

export default function Squad() {
  return (
    <Container>
      <Title>Lista de Squads</Title>
      <SquadTable /> 
    </Container>
  );
}
