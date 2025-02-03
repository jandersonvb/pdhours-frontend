import { Container } from "./styles"

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'alternate'
  disabled?: boolean
  onClick?: () => void
}

export function Button({ children, variant = 'primary', disabled = false, onClick }: ButtonProps) {
  return (
    <Container $variant={variant} disabled={disabled} onClick={onClick}>
      {children}
    </Container>
  )
}