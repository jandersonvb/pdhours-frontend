import styled, { css } from 'styled-components'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'alternate'
  disabled?: boolean
}

export const Container = styled.button<ButtonProps>`
  padding: 14px 24px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ variant, disabled }) => {
    switch (variant) {
      case 'primary':
        return css`
          background-color: ${disabled ? '#b3d4fc' : '#0056D2'};
          color: ${disabled ? '#ffffff' : '#ffffff'};
          &:hover {
            background-color: ${disabled ? '#b3d4fc' : '#2342C0'};
          }
        `
      case 'secondary':
        return css`
          background-color: ${disabled ? '#d3c6f3' : '#7048E8'};
          color: ${disabled ? '#ffffff' : '#ffffff'};
          &:hover {
            background-color: ${disabled ? '#d3c6f3' : '#5028C6'};
          }
        `
      case 'alternate':
        return css`
          background-color: ${disabled ? '#f4f4f4' : '#ffffff'};
          border: 2px solid ${disabled ? '#f4f4f4' : '#ACB5BD'};
          color: ${disabled ? '#000000' : '#495057'};
          &:hover {
            background-color: ${disabled ? '#f4f4f4' : '#e6e6e6'};
            border: 2px solid ${disabled ? '#f4f4f4' : '#000000'};
          }
        `
      default:
        return css`
          background-color: #f4f4f4;
          color: #000000;
        `
    }
  }}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}
`
