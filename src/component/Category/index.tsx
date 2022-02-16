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
    select?: boolean;
    selected?: (select: boolean) => void;
    setVehicle?: (title: string) => void;
}

export function Category({ 
    title, 
    setVehicle, 
    icon: Icon,
     ...rest
}: Props){
         
    const [toggle, setToggle] = useState(false);
    
    return (
    <View>
        <TouchableOpacity
            onPress={() => {
                setVehicle(title)
                setToggle(!toggle)
            }}
            {...rest}
        >
            <Content toggle={toggle}>
                <Icon width={50} height={50}/>
                <TextBold fontSize={15}>{title}</TextBold>
            </Content>
        </TouchableOpacity>
    </View>
  );
}