import { View } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import  styled  from 'styled-components';

export const Content = styled(View)`
  flex: 1;
`;

export const VehicleBrand = styled(View)`
  margin-top: 20px;
  margin-horizontal: 16px;
`;

export const Footer = styled(View)`
  margin-top: 45px;
  margin-bottom: ${getBottomSpace() + 45}px;;
  margin-horizontal: 38px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-between;
`;

export const ControllerText = styled(View)`
  margin-left: 25px;
`;





