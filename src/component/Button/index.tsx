import React, { ReactNode } from 'react';

import {
    TouchableOpacityProps,
    View
} from 'react-native';

import {  ButtonAction } from './styles';

interface Props extends TouchableOpacityProps{
    children: ReactNode;
    background: string;
}

export function Button({  children, background, ...rest}: Props){
  return (
    <View>
        <ButtonAction 
            activeOpacity={0.7}
            backgroundColor={background}
            {...rest}
        >
            {children}
        </ButtonAction>
    </View>
  );
}