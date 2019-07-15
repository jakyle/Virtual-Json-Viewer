import React from 'react';
import styled from 'styled-components'


const BraceSpan = styled.span`
  color: whitesmoke;
`;


export const Brace: React.FC = ({children}) => {
  
  return <BraceSpan>{children}</BraceSpan>
}