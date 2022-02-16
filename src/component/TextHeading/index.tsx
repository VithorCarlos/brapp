import React, {ReactNode} from 'react';
import { TextBoldCss, TextSemiBoldCss, TextRegularCss, TextLightCss } from './styles';

interface Props {
  children: ReactNode;
  color?: string;
  fontSize: number;
  lineHeight?: number;
  outline?: boolean;
  textAlign?: string;
  marginBottom?: number;
}

export function TextBold({children, color, fontSize, lineHeight, outline, textAlign, marginBottom}: Props) {
  return (
    <TextBoldCss 
      color={color}
      fontSize={fontSize}
      outline={outline}
      textAlign={textAlign} 
      marginBottom={marginBottom}
      style={{lineHeight: lineHeight}}
    >
      {children}
    </TextBoldCss>
  );
}

export function TextSemiBold(
  {children, color, fontSize, lineHeight, outline, textAlign, marginBottom}
  : Props) {
  return (
    <TextSemiBoldCss
      color={color}
      fontSize={fontSize}
      outline={outline}
      textAlign={textAlign} 
      marginBottom={marginBottom}
      style={{lineHeight: lineHeight}}
    >
      {children}
    </TextSemiBoldCss>
  );
}

export function TextRegular(
  {children, color, fontSize, lineHeight, outline, textAlign, marginBottom}
  : Props) {
  return (
    <TextRegularCss
      color={color}
      fontSize={fontSize}
      outline={outline}
      textAlign={textAlign} 
      marginBottom={marginBottom}
      style={{lineHeight: lineHeight}}
    >
      {children}
    </TextRegularCss>
  );
}

export function TextLight(
  {children, color, fontSize, lineHeight, outline, textAlign, marginBottom}
  : Props) {
  return (
    <TextLightCss
      color={color}
      fontSize={fontSize}
      outline={outline}
      textAlign={textAlign} 
      marginBottom={marginBottom}
      style={{lineHeight: lineHeight}}
    >
      {children}
    </TextLightCss>
  );
}
