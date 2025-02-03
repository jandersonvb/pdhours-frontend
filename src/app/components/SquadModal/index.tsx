import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { ButtonContainer, ModalContainer, Title } from "./styles";
import axios from "axios";
import { TriangleAlert, XIcon } from "lucide-react";
import { ErrorBox } from "../Navbar/styles";

type SquadModalProps = {
  onAddSquad: (name: string) => void;
};

export function SquadModal({ onAddSquad }: SquadModalProps) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async () => {
    if (!name.trim()) {
      setError('Nome da squad é obrigatório');
      return;
    }

    try {
      const { status } = await axios.post('http://localhost:3000/squad', { name });

      if (status === 201) {
        onAddSquad(name);
        resetForm();
      } else {
        setError('Erro ao criar squad');
      }
    } catch (error) {
      console.error(error);
      setError('Erro ao criar squad');
    }
  };

  const resetForm = () => {
    setName('');
    setError('');
    setIsModalOpen(false);
  };

  return (
    <ModalContainer>
      <Title>Criar Squad</Title>
      <Input
        type="text"
        label="Nome"
        placeholder="Digite o nome da squad"
        value={name}
        onChange={(e) => setName(e.target.value)}
        hasError={!!error}

      />

      {error && (
        <ErrorBox>
          <TriangleAlert
            size={18}
            style={{ cursor: 'pointer' }}
            onClick={() => setError('')}
          />
          <span style={{ marginLeft: '8px' }}>{error}</span>
          <XIcon
            size={18}
            style={{ cursor: 'pointer', display: 'block', marginLeft: 'auto' }}
            onClick={() => setError('')}
          />
        </ErrorBox>
      )}

      <ButtonContainer>
        <Button onClick={handleSubmit}>Criar Squad</Button>
      </ButtonContainer>
    </ModalContainer>
  )
}