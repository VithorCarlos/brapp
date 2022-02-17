import React, { useState } from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    View
} from 'react-native';
import { TextBold } from '../TextHeading';
import { Content } from './styles';



interface Props extends TouchableOpacityProps {
    title: string;
    color?: string;
    setData?: (title: any) => void;
    selected?: boolean;
}

export function ButtonAdd({ title, setData, color, selected = false, ...rest}: Props){
  return (
    <View>
        <TouchableOpacity {...rest}>
            <Content toggle={selected}>
                <TextBold color={color} fontSize={15}>{title}</TextBold>
            </Content>
        </TouchableOpacity>
    </View>

  );
}