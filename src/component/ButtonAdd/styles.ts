import { View } from 'react-native';
import styled from 'styled-components';
import { theme } from '../../global/styles/theme';

interface Props {
    toggle?: string;
}

const { primary } = theme.colors;

export const Content = styled(View)`
    background-color: ${theme.colors.secondary};
    border-width: ${(props: Props) => props.toggle ? 1 : 1}px;
    border-color: ${(props: Props) => props.toggle ? primary : 'transparent'};
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    height: 46px;
    padding-horizontal: 30px;
    margin-right: 13px;
    margin-bottom: 14px;
`;

