import { Container, NavItem } from "./styles";

type TabsProps = {
  active?: boolean
}

export function Tabs({ active }: TabsProps) {
  return (
    <Container>
      <NavItem active={active}>Squads</NavItem>
      <NavItem active={active}>Usuário</NavItem>
    </Container>
  )
}