import React from 'react';
import styled from 'styled-components'


const StringSpan = styled.span`
  color: greenyellow;
`;


export const StringValue: React.FC = ({children}) => {
  
  return <StringSpan>{children}</StringSpan>
}