
import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  gap: 66px;
  margin-left: 190px;
  margin-top: 124px; 
`;

interface TabProps {
  active: boolean;
}

export const Tab = styled.div<TabProps>` 
  a {
    text-decoration: none;
    color: ${({ active }) => (active ? '#4263EB' : '#ACB5BD')};
    font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  }
  
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
   background-color: #4263EB;
   transform: scaleX(${(props) => (props.active ? 1 : 0)});  
   transform-origin: left;
   transition: transform 0.6s ease-in-out;
 }

`;