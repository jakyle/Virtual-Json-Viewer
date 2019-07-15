import React, { useState } from 'react';
import { JsonRow } from './JsonRow';
import { FixedSizeList as List, FixedSizeListProps } from "react-window";
import { convertToJsxArray } from './JsonLines';
import styled from 'styled-components'




const Pre = styled.pre`
  background-color: #49483E;
`;


interface VirtualJsonViewerProps extends Omit<FixedSizeListProps, "itemData" | "itemCount" | "children" > {
  json: any
}

const VirtualJsonViewer: React.FC<VirtualJsonViewerProps> = (props) => {

  const [jsxArray] = useState(() => convertToJsxArray(props.json));

  return <Pre>
      <List {...{...props, itemData: jsxArray, itemCount: jsxArray.length}} >
      {JsonRow}
    </List>
  </Pre> 
}

export default VirtualJsonViewer;

