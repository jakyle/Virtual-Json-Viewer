import React from 'react';
import styled from 'styled-components'


const CommaSpan = styled.span`
  color: whitesmoke;
`;


export const Comma: React.FC = () => {
  
  return <CommaSpan>,</CommaSpan>
}