import { TouchableOpacity, View } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import styled from "styled-components";

export const Container = styled(View)`
    flex: 1;
    margin-horizontal: 16px
`;

export const Content = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 52px;
`;

export const DescriptionContent = styled(View)`
    justify-content: center;
`;

export const ResultContent = styled(View)`
   
    justify-content: center;
`;

export const Fipe = styled(TouchableOpacity)`
    justify-content: flex-end;
    flex-direction: row;
`;

export const Footer = styled(View)`
    margin-bottom: ${getBottomSpace() + 45}px;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    justify-content: flex-end;
`;