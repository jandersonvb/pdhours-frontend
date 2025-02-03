"use client";

import { useEffect, useState } from "react";

import { XIcon, AlertCircle, TriangleAlert } from 'lucide-react';
import { Button } from "../Button";
import { Input } from "../Input";
import { ModalContainer, Title, ErrorBox, Textarea, ButtonContainer, TextareaContainer } from "./styles";


export function ReportModal() {
  const [userId, setUserId] = useState('');
  const [hours, setHours] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');


  const handleSubmit = () => {
    if (!userId) {
      setError('ID do usuário é obrigatório');
    } else if (!hours) {
      setError('Horas gastas é obrigatório');
    }
    else if (!description) {
      setError('Descrição é obrigatória');
      return;
    }

    //acessar a API para criar o lançamento
    const data = fetch('https://localhost:3000/reports', {
      method: 'POST',
      body: JSON.stringify({
        userId,
        hours,
        description,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

  };



  return (
    <ModalContainer>
      <Title>Criar lançamento</Title>

      <Input
        type="text"
        label="ID do usuário"
        placeholder="Digite o ID do funcionário"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        hasError={!!error}
      />
      <Input
        type="text"
        label="Horas gastas"
        placeholder="Digite a quantidade de horas"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        disabled={!!error}
      />
      <TextareaContainer>
        <label>Descrição</label>
        <Textarea
          placeholder="Descreva o que foi feito"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={!!error}
        />
      </TextareaContainer>
      <ButtonContainer>
        <Button onClick={handleSubmit}>Criar lançamento</Button>
      </ButtonContainer>

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
        {success && (
        <ErrorBox style={{ backgroundColor: '#d4edda', color: '#155724' }}>
          <AlertCircle size={18} />
          <span style={{ marginLeft: '8px' }}>{success}</span>
          <XIcon
            size={18}
            style={{ cursor: 'pointer', display: 'block', marginLeft: 'auto' }}
            onClick={() => setSuccess('')}
          />
        </ErrorBox>
      )}
    </ModalContainer>
  );
}