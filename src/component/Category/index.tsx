import React, { useState } from 'react';
import { SvgProps } from 'react-native-svg';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    View
} from 'react-native';
import { TextBold } from '../TextHeading';
import { Content } from './styles';

interface Props extends TouchableOpacityProps {
    title: string;
    icon: React.FC<SvgProps>;
    selected?: boolean;
}

export function Category({ 
    title, 
    icon: Icon,
    selected,
     ...rest
}: Props){

    return (
    <View>
        <TouchableOpacity {...rest} >
            <Content toggle={selected}>
                <Icon width={50} height={50}/>
                <TextBold fontSize={15}>{title}</TextBold>
            </Content>
        </TouchableOpacity>
    </View>
  );
}