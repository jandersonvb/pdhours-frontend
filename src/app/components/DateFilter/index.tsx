import { Button } from "../Button";
import { Container, WrapperEndDate, WrapperStartDate } from "./styles";

export function DateFilter() {
  return (
    <Container>
      <WrapperStartDate>
        <label htmlFor="startDate" className="block text-gray-500">Início</label>
        <input type="date" id="startDate" className="border p-2 rounded" />
      </WrapperStartDate>
      <WrapperEndDate>
        <label htmlFor="endDate" className="block text-gray-500">Fim</label>
        <input
          type="date"
          id="endDate"
          className="border p-2 rounded"
        />
      </WrapperEndDate>
      <Button
        variant="primary"
      >
        Filtrar por data
      </Button>
    </Container>
  )
} 
