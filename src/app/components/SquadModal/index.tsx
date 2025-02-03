import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { ButtonContainer, ModalContainer, Title } from "./styles";

type SquadModalProps = {
  onAddSquad: (name: string) => void;
};

export function SquadModal({ onAddSquad }: SquadModalProps) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = () => {
    if (!name) {
      setError('Nome da squad é obrigatório');
      return;
    }

    //acessar a API para criar a squad
    const data = fetch('https://localhost:3000/squads', {
      method: 'POST',
      body: JSON.stringify({
        name,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    //chamar a função de callback
    onAddSquad(name);

    //limpar o campo de nome
    setName('');

    //fechar o modal
    setIsModalOpen(false);

    //limpar o erro
    setError('');
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
      <ButtonContainer>
        <Button onClick={handleSubmit}>Criar Squad</Button>
      </ButtonContainer>
    </ModalContainer>
  )
}