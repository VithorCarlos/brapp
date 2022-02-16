import { View } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import styled from "styled-components";


export const Content = styled(View)`
    margin-left: 23px;
    margin-right: 10px;
    flex: 1;
    
    `;

export const VehicleYear = styled(View)`
    margin-top: 25px;
    
    `;
export const Footer = styled(View)`
  margin-top: 50px;
  margin-horizontal: 38px;
  margin-bottom: ${getBottomSpace() + 45}px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-between;
`;