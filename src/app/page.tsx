'use client'

import Image from "next/image"

import { Logo } from "../app/components/Logo"
import { Button } from "./components/Button"
import { Container, ContainerLogo, Title } from "./style"

export default function Home() {
  return (
    //Criar uma página inicial com um botão para redirecionar para a página de detalhes da squad, deve ter a logo da empresa e o nome da empresa
    <Container>
      <ContainerLogo>
        <Logo width={50} height={50} />
      </ContainerLogo>
      <Title>Bem vindo a PD Hours - Navegue em Squads e Usuários</Title>
    </Container>
  )
}
