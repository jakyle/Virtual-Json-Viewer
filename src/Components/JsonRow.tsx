import React from 'react';

interface JsonRowProps {
  index: number,
  style: React.CSSProperties
  data: any[]
}


export const JsonRow: React.FC<JsonRowProps> = ({data, index, style}) => {

  return <div style={style} className="pretty-json-line">{data[index]}</div>

}