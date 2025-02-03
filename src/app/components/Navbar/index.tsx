'use client';

import { useState } from "react";
import { Button } from "../Button";
import { Logo } from "../Logo";
import Modal from "../Modal";
import { ReportModal } from "../ReportModal";
import { Container, ContainerLogo, Header, Title } from "./styles";
import Link from "next/link";

export function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }
  
  return (
    <Container>
      <ContainerLogo as={Link} href="/">
        <Logo />
      </ContainerLogo>
      <Header>
        <Title>PD Hours</Title>
        <Button onClick={handleOpenModal}>Lançar horas</Button>
      </Header>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ReportModal />
      </Modal>
    </Container>
  );
}
