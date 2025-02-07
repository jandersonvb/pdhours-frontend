'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Container, ContainerInput, ContainerTitle, Table, TableContainer, Td, Th, Title } from './style';
import { Loading } from '../Loading';
import { report } from 'process';

type User = {
  id: number;
  name: string;
  estimatedHours: number;
}

type Report = {
  id: number;
  member: string;
  description: string;
  spentHours: number;
  createdAt: string;
  user: User;
};

type SquadDetailProps = {
  squadId: string;
};




export default function SquadDetail({ squadId }: SquadDetailProps) {
  const currentDate = new Date().toISOString().split('T')[0];

  const [hoursByMember, setHoursByMember] = useState<{ name: string; totalHours: number }[]>([]);
  const [totalHours, setTotalHours] = useState(0);
  const [averageHours, setAverageHours] = useState(0);

  const [users, setUsers] = useState<User[]>([]);
  const [squad, setSquad] = useState<{ name: string; reports: Report[] } | null>(null);
  const [reports, setReports] = useState<Report[]>([]);
  const [startDate, setStartDate] = useState(currentDate);
  const [error, setError] = useState('');
  const [endDate, setEndDate] = useState(currentDate);
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Busca as horas por membro, total de horas e média de horas
  useEffect(() => {
    if (isClient) {
      const fetchHoursData = async () => {
        try {
          const [hoursByMemberRes, totalHoursRes, averageHoursRes] = await Promise.all([
            axios.get(`http://localhost:3000/squad/${squadId}/hours-by-member`, { params: { startDate, endDate } }),
            axios.get(`http://localhost:3000/squad/${squadId}/total-hours`, { params: { startDate, endDate } }),
            axios.get(`http://localhost:3000/squad/${squadId}/average-hours`, { params: { startDate, endDate } }),
          ]);

          setHoursByMember(hoursByMemberRes.data);
          setTotalHours(totalHoursRes.data);
          setAverageHours(averageHoursRes.data);
        } catch (error) {
          console.error('Erro ao buscar estatísticas da squad:', error);
        }
      };

      fetchHoursData();
    }
  }, [isClient, squadId, startDate, endDate]);


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



  useEffect(() => {
    if (isClient) {
      const fetchSquad = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/squad/${squadId}`);

          setSquad(response.data);
        } catch (error) {
          console.error('Erro ao buscar detalhes da squad:', error);
        }
      };
      fetchSquad();
    }
  }, [isClient, squadId]);


  useEffect(() => {
    if (isClient) {
      const fetchSquad = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/report`);

          setReports(response.data);
        } catch (error) {
          console.error('Erro ao buscar detalhes da squad:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchSquad();
    }
  }, [isClient]);


  if (!isClient || loading) return <Loading />;
  if (!reports) return <p>Erro ao buscar detalhes da squad</p>;



  const handleFilter = () => {
    const filteredReports = squad?.reports?.filter((report) => {
      const reportDate = new Date(report.createdAt).getTime();

      const start = new Date(startDate).getTime();

      const end = new Date(endDate).getTime();

      return reportDate >= start && reportDate <= end;
    });

    setReports(filteredReports || []);
  }

  return (
    <Container>
      <Title>{squad?.name}</Title>
      <ContainerInput>
        <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} label='Início' />
        <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} label='Fim' />
        <Button onClick={handleFilter}>Filtrar por data</Button>

      </ContainerInput>

      <Title>Horas por membro</Title>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <Th>Membro</Th>
              <Th>Descrição</Th>
              <Th>Horas</Th>
              <Th>Criado em</Th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id}>
                <Td>{report.user?.name}</Td>
                <Td>{report.description}</Td>
                <Td>{report.spentHours}</Td>
                <Td>{new Date(report.createdAt).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>

      <ContainerTitle>
        <Title>Horas totais da squad</Title>
        <p>{totalHours} Horas</p>

        <Title>Média de horas por dia</Title>
        <p>{averageHours.toFixed(2)} Horas/Dia</p>
      </ContainerTitle>
    </Container>
  );
}
