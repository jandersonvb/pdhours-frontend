import { Button } from "../Button";
import { Logo } from "../Logo";
import { Container, Title, Header } from "./styles";


export function Navbar() {
  return (
    <Container>
      <Logo />
      <Header>
        <Title>PD Hours</Title>
        <Button>Lançar horas</Button>
      </Header>

    </Container>
  )
}