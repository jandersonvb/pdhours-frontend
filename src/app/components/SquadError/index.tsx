import { FrownIcon } from "lucide-react";
import { Container, Title } from "./style";
import { Button } from "../Button";
import { useState } from "react";
import Modal from "../Modal";
import { SquadModal } from "../SquadModal";

type SquadErrorProps = {
  onRetry: () => void;
  onCreateSquad: (name: string) => void;
};

export function SquadError({ onRetry, onCreateSquad }: SquadErrorProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenSquadModal = () => setIsModalOpen(true);
  const handleCloseSquadModal = () => setIsModalOpen(false);

  return (
    <Container>
      <FrownIcon size={64} />
      <Title>Nenhuma squad cadastrada. Crie uma squad para começar.</Title>
      <Button onClick={handleOpenSquadModal}>Criar squad</Button>
      <Button onClick={onRetry}>Tentar novamente</Button>
      <Modal isOpen={isModalOpen} onClose={handleCloseSquadModal}>
        <SquadModal onAddSquad={onCreateSquad} />
      </Modal>
    </Container>
  );
}
