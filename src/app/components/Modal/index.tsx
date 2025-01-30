/**
 * 
 * Crie um modal que será utilizado para exibir informações de um membro do squad.
 * 
 * O modal deve conter:
 * - Nome da squad (label)
 * -input para o nome da squad
 * - botão para fechar o modal
 * -botão "Criar squad"
 * 
 *  * 
 */

import { Container } from "./style";

export function Modal() {
  return (
    <Container>
      <WrapperSquadName>
        <label htmlFor="squadName" className="block text-gray-500">Nome da squad</label>
        <input type="text" id="squadName" className="border p-2 rounded" />
      </WrapperSquadName>
      <Button
        variant="primary"
      >
        Criar squad
      </Button>
    </Container>
  )
}