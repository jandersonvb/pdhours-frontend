'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Container, ContainerInput, ContainerTitle, Table, TableContainer, Td, Th, Title } from './style';
import { Loading } from '../Loading';

type Report = {
  id: number;
  member: string;
  description: string;
  hours: number;
  createdAt: string;
};

type SquadDetailProps = {
  squadId: string | string[];
};


export default function SquadDetail({ squadId }: SquadDetailProps) {
  const [squad, setSquad] = useState<{ name: string; reports: Report[] } | null>(null);
  const [reports, setReports] = useState<Report[]>([]);
  const [startDate, setStartDate] = useState(Date.now().toString());
  const [endDate, setEndDate] = useState(Date.now().toString());
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const fetchSquad = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/squad/${squadId}`);
          console.log('Resposta da API:', response.data); // Verifique os dados aqui
          setSquad(response.data);
        } catch (error) {
          console.error('Erro ao buscar detalhes da squad:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchSquad();
    }
  }, [squadId, isClient]);

  if (!isClient || loading) return <Loading />;
  if (!squad) return <p>Squad não encontrada.</p>;

  const totalHours = squad?.reports?.reduce((sum, report) => sum + report.hours, 0) || 0;
  const daysCount = new Set(squad?.reports?.map((report) => report.createdAt)).size || 0;
  const averageHoursPerDay = daysCount ? (totalHours / daysCount).toFixed(2) : 0;

  const handleFilter = () => {
    const filteredReports = squad.reports.filter((report) => {
      const reportDate = new Date(report.createdAt).getTime();
      const start = new Date(startDate).getTime();
      const end = new Date(endDate).getTime();
      return reportDate >= start && reportDate <= end;
    });
    setReports(filteredReports);
  }

  return (
    <Container>
      <Title>{squad.name}</Title>
      <ContainerInput>
        <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} label='Início' />
        <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} label='Fim' />
        <Button onClick={handleFilter}>Filtrar por data</Button>

      </ContainerInput>

      <h2>Horas por membro</h2>
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
                <Td>{report.member}</Td>
                <Td>{report.description}</Td>
                <Td>{report.hours}</Td>
                <Td>{new Date(report.createdAt).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>

      <ContainerTitle>
        <h3>Horas totais da squad</h3>
        <p>{totalHours} Horas</p>

        <h3>Média de horas por dia</h3>
        <p>{averageHoursPerDay} Horas/Dia</p>
      </ContainerTitle>
    </Container>
  );
}
