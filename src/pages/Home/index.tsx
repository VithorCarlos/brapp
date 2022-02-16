import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import { Background } from '../../component/Background';
import { TextBold, TextSemiBold, TextRegular } from '../../component/TextHeading';
import CarSvg from '../../assets/images/car.svg'
import { Content, Description, ActionButton} from './styles';

export function Home(){
  const navigation = useNavigation();
  const [ car, setCar ] = useState('Veiculos');
  return (
      <Background>
          <Content>
            <TextBold fontSize={35}>
              Olá
            </TextBold>

              <TextSemiBold fontSize={25}>
                Bem vindo ao BRApp
              </TextSemiBold>
           
          <Description>
            <TextRegular fontSize={16} lineHeight={20}>
              Aqui é possivel realizar buscas das informacoes {'\n'}
              mais relevantes, basta selecionar um tema abaixo.
            </TextRegular>
            </Description>
          </Content>

          <ActionButton 
            activeOpacity={0.7}
            onPress={() => navigation.navigate('CategorySelect', { titleBreadcrumb: car})}
          >
            <CarSvg width={157} height={120}/>
            <TextBold fontSize={40}>
              {car}
            </TextBold>
          </ActionButton>
      
      </Background>
  );
}