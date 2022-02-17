import { View } from 'react-native';
import styled from 'styled-components';
import { theme } from '../../global/styles/theme';

interface Props {
    toggle?: boolean;
}

const { primary } = theme.colors;

export const Content = styled(View)`
    background-color: ${theme.colors.secondary};
    border-width: 1px;
    border-color: ${(props: Props) => props.toggle ? primary : 'transparent'};
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    height: 46px;
    padding-horizontal: 20px;
    margin-right: 13px;
    margin-bottom: 14px;
`;

