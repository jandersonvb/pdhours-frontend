import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  gap: 66px;

  margin-left: 190px;
  margin-top: 24px;

  `

export const NavItem = styled.a<{ active?: boolean }>`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  position: relative;
  transition: color 0.6s ease-in-out;

  &::after {
    content: '';
    position: absolute;

    bottom: -10px;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #1e90ff;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.6s ease-in-out;
  }

  &:hover {
    font-weight: bold;
    color:  #1e90ff;
   
  }

  &:hover::after {
    transform: scaleX(1);   
  }
`
