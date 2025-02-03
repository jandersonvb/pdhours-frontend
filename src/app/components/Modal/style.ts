import styled from "styled-components";

interface DialogProps {
  open: boolean;
  $onOpenChange: () => void;
}

export const Dialog = styled.div<DialogProps>`
  display: ${(props) => (props.open ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const DialogContent = styled.div`
  position: relative;
  margin: 80px auto;
  padding: 20px;
  width: 500px;
  background: #fff;
  border-radius: 12px;
  
`;

export const DialogHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
`;

export const DialogTitle = styled.h2`

`;


export const Content = styled.div`

  display: flex;
  flex-direction: column;
  border-radius: 12px;


  /* input {
    padding: 10px;
    margin: 10px 0;
    
    label {
      font-weight: 500;
      font-size: 16px;
      color: #1F2937;
    }
  } */
`;