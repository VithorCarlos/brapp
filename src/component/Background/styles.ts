import { SafeAreaView } from 'react-native';
import styled from 'styled-components';
import { theme } from '../../global/styles/theme';

export const Container = styled(SafeAreaView)`
    flex: 1;
    flex-basis: 0;
    background-color: ${theme.colors.background};
`;