'use client';

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../Button";
import { Loading } from "../Loading";
import Modal from "../Modal";
import { SquadModal } from "../SquadModal";
import { Table, TableContainer, Td, Th } from "./style";
import { SquadError } from "../SquadError";
import { useRouter } from "next/navigation";

type Squad = {
  id: number;
  name: string;
};

export function SquadTable() {
 const router = useRouter();

  const [squads, setSquads] = useState<Squad[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função reutilizável para buscar squads
  const fetchSquads = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/squad');
      setSquads(response.data);
      setError('');
    } catch (err) {
      setError('Estamos com problemas para buscar as squads');
    } finally {
      setLoading(false);
    }
  }, []);

  //Busca squads
  useEffect(() => {
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

  const handleVisitSquad = (squadId: number) => {
    router.push(`/squad/${squadId}`);  
  };
  
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <SquadError onRetry={fetchSquads} onCreateSquad={handleCreateSquad} />;
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
                <Button onClick={() => handleVisitSquad(squad.id)}>Visitar squad</Button>
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
