import {theme} from '../../global/styles/theme';
import styled from 'styled-components';
import { Text } from 'react-native';


interface Props {
    color?: string;
    fontSize: number;
    outline?: boolean;
    textAlign?: string;
    marginBottom?: number;
}

const {heading, heading_light, primary} = theme.colors;

export const TextBoldCss = styled(Text)`
  font-family: ${theme.fonts.title700};
  font-size: ${(props: Props) => props.fontSize}px;
  color: ${(props: Props) => props.color ?? heading};
  text-decoration: ${(props: Props) => props.outline ? 'underline' : 'none'};
  text-decoration-color: ${(props: Props) => props.outline ? primary : 'transparent'};
  text-align: ${(props: Props) => props.textAlign ? props.textAlign : 'left'};
  margin-bottom: ${(props: Props) => props.marginBottom ? props.marginBottom : 0}px;
`;

export const TextSemiBoldCss = styled(Text)`
  font-family: ${theme.fonts.title500};
  font-size: ${(props: Props) => props.fontSize}px;
  color: ${(props: Props) => props.color ?? heading_light};
  text-decoration: ${(props: Props) => props.outline ? 'underline' : 'none'};
  text-decoration-color: ${(props: Props) => props.outline ? primary : 'transparent'};
  text-align: ${(props: Props) => props.textAlign ? props.textAlign : 'left'};
  margin-bottom: ${(props: Props) => props.marginBottom ? props.marginBottom : 0}px;
`;

export const TextRegularCss = styled(Text)`
  font-family: ${theme.fonts.title400};
  font-size: ${(props: Props) => props.fontSize}px;
  color: ${(props: Props) => props.color ?? heading_light};
  text-decoration: ${(props: Props) => props.outline ? 'underline' : 'none'};
  text-decoration-color: ${(props: Props) => props.outline ? primary : 'transparent'};
  text-align: ${(props: Props) => props.textAlign ? props.textAlign : 'left'};
  margin-bottom: ${(props: Props) => props.marginBottom ? props.marginBottom : 0}px;
`;


export const TextLightCss = styled(Text)`
  font-family: ${theme.fonts.title300};
  font-size: ${(props: Props) => props.fontSize}px;
  color: ${(props: Props) => props.color ?? heading_light};
  text-decoration: ${(props: Props) => props.outline ? 'underline' : 'none'};
  text-decoration-color: ${(props: Props) => props.outline ? primary : 'transparent'};
  text-align: ${(props: Props) => props.textAlign ? props.textAlign : 'left'};
  margin-bottom: ${(props: Props) => props.marginBottom ? props.marginBottom : 0}px;
`;

