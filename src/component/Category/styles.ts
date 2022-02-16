import { View } from 'react-native';
import { theme } from '../../global/styles/theme';
import styled from 'styled-components';

const { primary ,secondary } = theme.colors;

interface Props {
    toggle?: string;
}

export const Content = styled(View)`
    background-color: ${secondary};
    border-radius: 10px;
    border-width: ${(props: Props) => props.toggle ? 1 : 0}px;
    border-color: ${(props: Props) => props.toggle ? primary : 'transparent'};
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 100px;
    margin-right: 20px;
    max-width: 110px
`;
