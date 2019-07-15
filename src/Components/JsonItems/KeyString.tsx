import React from 'react';
import styled from 'styled-components'


const KeyStringSpan = styled.span`
  color: red;
`;


export const KeyString: React.FC = ({children}) => {
  
  return <KeyStringSpan>{children}</KeyStringSpan>
}