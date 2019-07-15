import React from 'react';
import styled from 'styled-components'


const NumberSpan = styled.span`
  color: orange;
`;


export const NumberValue: React.FC = ({children}) => {
  
  return <NumberSpan>{children}</NumberSpan>
}