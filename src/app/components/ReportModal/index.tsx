"use client";

import { useEffect, useState } from "react";

import { XIcon, AlertCircle, TriangleAlert } from 'lucide-react';
import { Button } from "../Button";
import { Input } from "../Input";
import { ModalContainer, Title, ErrorBox, Textarea, ButtonContainer, TextareaContainer } from "./styles";
import axios from "axios";


export function ReportModal() {
  const [userId, setUserId] = useState('');
  const [hours, setHours] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');


  const handleSubmit = async () => {
    if (!userId) {
      setError("ID do usuário é obrigatório");
      return;
    } else if (!hours) {
      setError("Horas gastas é obrigatório");
      return;
    } else if (!description) {
      setError("Descrição é obrigatória");
      return;
    }

    try {
      await axios.post("https://localhost:3000/reports", {
        userId,
        hours,
        description,
      });

      setSuccess("Lanmçamento criado com sucesso!");
      setUserId("");
      setHours("");
      setDescription("");
      setError("");
    } catch (err) {
      setError("Erro ao criar o lançamento. Tente novamente.");
    }
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