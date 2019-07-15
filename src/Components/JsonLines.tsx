import React from 'react';
import { StringValue } from './JsonItems/StringValue';
import { BooleanValue } from './JsonItems/BooleanValue';
import { NumberValue } from './JsonItems/NumberValue';
import { Brace } from './JsonItems/Brace';
import { KeyString } from './JsonItems/KeyString';
import { Colon } from './JsonItems/Colon';
import { Comma } from './JsonItems/Comma';



export const convertToJsxArray = (input: any) => {
  const jsonStringCollection = JSON.stringify(
    typeof input === "string" ? JSON.parse(input) : input, null, 2)
    .replace(/&/g, '&amp;')
    .replace(/\\"([^,])/g, '\\&quot;$1')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .split(/\r\n|\n|\r/gm)
    .map(toJSX)
    
  return jsonStringCollection;
}

const toJSX = (line: string) => {

  let [trimmedLine, hasComma] = checkHasComma(line);

  return /^(\s*({|\[|},?|],?))$/.test(trimmedLine) ? (
      <>
        <Brace>{trimmedLine}</Brace>
        {hasComma && <Comma />}
      </>
    ) : (
      <>
        {mapKeyValueToJSX(trimmedLine)}
        {hasComma && <Comma />}
      </>
    );
}

const checkHasComma = (line: string): [string, boolean] => {
  let lineCopy = line;
  let hasComma = false;
  if (lineCopy[lineCopy.length - 1] === ',') {
    lineCopy = lineCopy.slice(0, -1);
    hasComma = true;
  }

  return [lineCopy, hasComma]
}

const mapKeyValueToJSX = (line: string) => {

  const trimmedLine = line.trimRight();
  const lineType = mapValueType(trimmedLine);

  if (lineType !== "key") return lineType;

  const lineArray = line.split(/( *"[^"]+"):/);

  let key = lineArray[1].trimRight()
  key = lineArray[0] + key;

  let value = lineArray[2].trim();

  return (
    <>
      <KeyString>{key}</KeyString>
      <Colon />
      {mapValueType(value) as JSX.Element}
    </>
  );
}

const mapValueType = (value: string) => {
  switch (true) {
    case /( *"[^"]+"):/.test(value): return "key"
    case /(")((?:\\\1|(?:(?!\1).))*)\1/.test(value): return <StringValue>{value}</StringValue>
    case /(true|false)$/.test(value): return <BooleanValue>{value}</BooleanValue>
    case /^(\s*[-]{0,1}[\d]*[.]{0,1}[\d]+)$/.test(value): return <NumberValue>{value}</NumberValue>
    case /({|\[)$/.test(value): return <Brace>{value}</Brace>
    default: return "key";
  }
}