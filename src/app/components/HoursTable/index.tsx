import { TableContainer, TableHead, TableRow, TableHeader, TableBody, TableCell } from "./styles";

interface Member {
  id: number;
  name: string;
  description: string;
  hours: number;
  createdAt: string;
}

export function HoursTable({ members }: { members: Member[] }) {
  return (<>
    <h1
      style={{
        textAlign: 'center',
        fontFamily: 'Roboto, sans-serif'
      }}
    >Horas por membro</h1>

    <TableContainer>
      <TableHead>
        <TableRow>
          <TableHeader>Membro</TableHeader>
          <TableHeader>Descrição</TableHeader>
          <TableHeader>Horas</TableHeader>
          <TableHeader>Criado em</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {members.map((member) => (
          <TableRow key={member.id}>
            <TableCell>{member.name}</TableCell>
            <TableCell>{member.description}</TableCell>
            <TableCell>{member.hours}</TableCell>
            <TableCell>{member.createdAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
    <h1
      style={{
        textAlign: 'center',
        fontFamily: 'Roboto, sans-serif'
      }}>
      Horas totais da squad
    </h1>
    <h2
      style={{
        textAlign: 'center',
        fontFamily: 'Roboto, sans-serif',
        color: '#4263eb'
      }}>
      {members.reduce((acc, member) => acc + member.hours, 0)} horas
    </h2>
    <h1
      style={{
        textAlign: 'center',
        fontFamily: 'Roboto, sans-serif'
      }}>
      Média de horas por dia
    </h1>
    <h2
      style={{
        textAlign: 'center',
        fontFamily: 'Roboto, sans-serif',
        color: '#4263eb'
      }}>
      {Math.ceil(members.reduce((acc, member) => acc + member.hours, 0) / members.length)} horas/dia
    </h2>
  </>
  );
}
