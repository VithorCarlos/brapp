import { View } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import styled from "styled-components";

export const Container = styled(View)`
    flex: 1;
    margin-horizontal: 23px;
`;

export const ModelVehicle = styled(View)`
    margin-top: 20px;
    
`;

export const Footer = styled(View)`
  margin-top: 56%;
  margin-horizontal: 38px;
  margin-bottom: ${getBottomSpace() + 45}px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-between;
`;