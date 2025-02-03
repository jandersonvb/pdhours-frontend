'use client'

import { UserTable } from "../components/UserTable";
import { Container, Title } from "./style";

export default function User() {
  return (
    <Container>
      <Title>Lista de Usuários</Title>
      <UserTable />

    </Container>
  );
}
