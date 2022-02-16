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
    selected?:boolean;
    color?: string;
    setData?: (title: string) => void;
}

export function ButtonAdd({ title, setData, color, selected = false, ...rest}: Props){

    const [toggle, setToggle] = useState(false);
  return (
    <View>
        <TouchableOpacity
            onPress={() => {
                setData(title)
                setToggle(!toggle)
            }}
            {...rest}
        >
            <Content toggle={toggle}>
                <TextBold color={color} fontSize={15}>{title}</TextBold>
            </Content>
        </TouchableOpacity>
    </View>

  );
}