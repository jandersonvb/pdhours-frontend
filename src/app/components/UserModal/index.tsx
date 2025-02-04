import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { ModalContainer, Title, ButtonContainer } from "./style";
import axios from "axios";

type UserModalProps = {
  onAddUser: (name: string, estimatedHours: number, squadId: string) => void;
};

export function UserModal({ onAddUser }: UserModalProps) {
  const [name, setName] = useState('');
  const [estimatedHours, setEstimatedHours] = useState<number>(1);
  const [squadId, setSquadId] = useState('');
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async () => {
    if (!name || !estimatedHours || !squadId) {
      setError('Nome, horas estimadas e squad são obrigatórios');
      return;
    }

    onAddUser(name, estimatedHours, squadId);
    resetForm();
  }

  const resetForm = () => {
    setName('');
    setEstimatedHours(1);
    setSquadId('');
    setError('');
    setIsModalOpen(false);
  };

  return (
    <ModalContainer>
      <Title>Criar Usuário</Title>
      <Input
        type="text"
        label="Nome"
        placeholder="Digite o nome do usuário"
        value={name}
        onChange={(e) => setName(e.target.value)}
        hasError={!!error}
      />
      <Input
        type="number"
        label="Horas estimadas"
        placeholder="Digite as horas estimadas"
        value={estimatedHours}
        onChange={(e) => setEstimatedHours(Number(e.target.value))}
        hasError={!!error}
      />
      <Input
        type="text"
        label="Squad"
        placeholder="Digite o nome da squad"
        value={squadId}
        onChange={(e) => setSquadId(e.target.value)}
        hasError={!!error}
      />
      <ButtonContainer>
        <Button onClick={handleSubmit}>Criar Usuário</Button>
      </ButtonContainer>
    </ModalContainer>
  )
}