import { TableContainer, TableHead, TableRow, TableHeader, TableBody, TableCell } from "./styles";

interface Member {
  id: number;
  name: string;
  description: string;
  hours: number;
  createdAt: string;  
}

export function HoursTable({ members }: { members: Member[] }) {
  return (
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
  );
}
