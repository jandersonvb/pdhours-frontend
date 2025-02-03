import styled from 'styled-components'

export const ContainerLogo = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`


export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid #F9FAFC;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #F9FAFC;
  position: fixed;
  width: 100%;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  
  
`

export const Header = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-left: 24px;
  align-items: center;
`

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;  
  font-size: 24px;
  font-weight: bold;
  color: #212429;
  margin-right: 24px;
`
export const Content = styled.div`  
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 24px;
  background-color: #fff;
  border-radius: 12px;

  input {
    width: 100%;
  }
  

  button { 
    align-self: center;
    width: 50%;
  }



`
