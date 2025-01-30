'use client';

import Link from "next/link";
import { Container, NavItem } from "./styles";

type TabsProps = {
  active?: boolean
}

export function Tabs({ active }: TabsProps) {
  return (
    <Container>
      <Link href="/squad" style={{ textDecoration: 'none', color: 'black' }}>
        <NavItem active={active}>Squads</NavItem>
      </Link>
      <Link href="/user" style={{ textDecoration: 'none', color: 'black' }}>
        <NavItem active={active}>Usuários</NavItem>
      </Link>
    </Container>
  )
}