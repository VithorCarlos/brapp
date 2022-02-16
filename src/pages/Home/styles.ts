import { TouchableOpacity, View } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import styled from 'styled-components';

const { primary, secondary } = theme.colors;

export const Content = styled(View)`
    margin-top: ${getStatusBarHeight() + 40}px;
    margin-horizontal: 18px;
`;

export const Description = styled(View)`
    margin-top: 26px;
    margin-bottom: 80px;
`;

export const ActionButton = styled(TouchableOpacity)`
    background-color: ${secondary};
    justify-content: center;
    align-items: center;
    margin-horizontal: 30px;
    height: 315px;
    border-radius: 10px;
    border-width: 1px;
    border-color: ${primary};
`;


