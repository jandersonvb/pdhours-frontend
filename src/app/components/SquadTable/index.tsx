'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Loading } from "../Loading";
import Modal from "../Modal";
import { SquadModal } from "../SquadModal";
import { Table, TableContainer, Td, Th } from "./style";

type Squad = {
  id: number;
  name: string;
};

export function SquadTable() {
  const [squads, setSquads] = useState<Squad[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Aqui é feita a requisição para a API para buscar as squads
  useEffect(() => {
    const fetchSquads = async () => {
      try {
        const response = await fetch('http://localhost:3000/squad');

        if (!response.ok) {
          throw new Error('Erro ao buscar squads');
        }
        const data = await response.json();

        setSquads(data);
      } catch (err) {
        if (err instanceof Error) {
          setError('Estamos com problemas para buscar as squads');
        } else {
          setError('Erro desconhecido');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSquads();
  }, []);

  // Função para abrir o modal 
  const handleOpenSquadModal = () => {
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const handleCloseSquadModal = () => {
    setIsModalOpen(false);
  };

  // Função para criar uma squad
  const handleCreateSquad = async (name: string) => {
    if (!name) {
      setError('Nome da squad é obrigatório');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/squad', { name });

      setSquads([...squads, response.data]);
      setIsModalOpen(false);
    } catch (error) {
      setError('Erro ao criar squad');
      
    }

  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Nome</Th>
            <Th></Th>
          </tr>
        </thead>
        <tbody>
          {squads.map((squad) => (
            <tr key={squad.id}>
              <Td>{squad.id}</Td>
              <Td>{squad.name}</Td>
              <Td>
                <Button onClick={() => { }}>Visitar squad</Button>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={handleOpenSquadModal}>Criar squad</Button>
      <Modal isOpen={isModalOpen} onClose={handleCloseSquadModal}>
        <SquadModal onAddSquad={handleCreateSquad} />
      </Modal>
    </TableContainer>
  );
}
