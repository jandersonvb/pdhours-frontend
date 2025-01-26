import { Container, NavItem } from "./styles";

type TabsProps = {
  active?: boolean
}


export function Tabs({ active }: TabsProps) {
  const handleGoToSquads = () => {
    window.location.href = "/";
  }

  const handleGoToUser = () => {
    window.location.href = "/user";
  }

  return (
    <Container>
      <NavItem active={active} onClick={handleGoToSquads}>Squads</NavItem>
      <NavItem active={active} onClick={handleGoToUser}>Usuário</NavItem>
    </Container>
  )
}