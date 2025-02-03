import { useState, useEffect } from "react";
import { Loading } from "../Loading";
import { Table, TableContainer, Td, Th } from "./style";
import { Button } from "../Button";
import axios from "axios";
import Modal from "../Modal";
import { UserModal } from "../UserModal";

type User = {
  id: number;
  name: string;
  estimatedHours: number;
}

export function UserTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para buscar os funcionários
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/employee');

        setUsers(response.data);
      }
      catch (err) {
        if (err instanceof Error) {
          setError('Estamos com problemas para buscar os funcionários');
        }
        else {
          setError('Erro desconhecido');
        }
      }
      finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Função para abrir o modal
  const handleOpenUserModal = async () => {
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const handleCloseUserModal = () => {
    setIsModalOpen(false);
  };

  // Função para criar um funcionário
  const handleCreateUser = async (name: string, estimatedHours: number) => {
    if (!name) {
      setError('Nome é obrigatório');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/employee', {
        name, estimatedHours
      });

      setUsers([...users, response.data]);
      setIsModalOpen(false);
    } catch (error) {
      setError('Erro ao criar funcionário');
    }
  }

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
            <Th>Nome</Th>
            <Th>Horas</Th>
            <Th>Squad ID</Th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <Td>{user.name}</Td>
              <Td>{user.estimatedHours}</Td>
              <Td>{user.id}</Td>
            </tr>))}
        </tbody>
      </Table>
      <Button onClick={handleOpenUserModal}>Criar usuário</Button>
      <Modal isOpen={isModalOpen} onClose={handleCloseUserModal}>
        <UserModal onAddUser={handleCreateUser}
        />
      </Modal>
    </TableContainer>);
} 
