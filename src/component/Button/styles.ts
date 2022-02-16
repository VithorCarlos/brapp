import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { theme } from '../../global/styles/theme';

interface Props {
    backgroundColor: string;
    disabled?: boolean;
}

const { primary, primary_disabled } = theme.colors;

export const ButtonAction = styled(TouchableOpacity)`
    flex-direction: row;
    background-color: ${(props: Props) => props.disabled ? primary_disabled : props.backgroundColor};
    border-radius: 10px;
    height: 45px;
    width: 187px;
    justify-content: center;
    align-items: center;
`;