import React from 'react';
import styled from 'styled-components'


const BooleanSpan = styled.span`
  color: violet;
`;


export const BooleanValue: React.FC = ({children}) => {
  
  return <BooleanSpan>{children}</BooleanSpan>
}