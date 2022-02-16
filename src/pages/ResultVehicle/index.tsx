import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import {
  ScrollView, 
  View, 
} from 'react-native';
import Clipboard from "@react-native-community/clipboard";
import { Background } from '../../component/Background';
import { Breadcrumb, IParams } from '../../component/Breadcrumb';
import { TextBold, TextLight, TextSemiBold } from '../../component/TextHeading';
import { theme } from '../../global/styles/theme';
import { Container, Content, DescriptionContent, Fipe, ResultContent } from './styles';
import CopySvg from '../../assets/images/copy.svg';
import { Button } from '../../component/Button';
import { Footer } from './styles';

interface Props {
   
}

export function ResultVehicle(){
    const route = useRoute();
    const params = route.params as IParams;
    const navigation = useNavigation();


  return (
    <Background>
         <Breadcrumb
            titleBreadcrumb={params.titleBreadcrumb} 
            vehicleBreadcrumb={params.vehicleBreadcrumb} 
            brandBreadcrumb={params.brandBreadcrumb}
            modelBreadcrumb={params.modelBreadcrumb} 
            yearBreadcrumb={params.yearBreadcrumb}
        />

        <Container>
            <View style={{marginTop: 30}}>
                <TextSemiBold fontSize={20}>
                    Dados do veiculo
                </TextSemiBold>
            </View>
        
            <ScrollView
                showsHorizontalScrollIndicator={false}
            >
                {
                <>
                <Content>
                    <DescriptionContent>
                        <TextLight  fontSize={20} color={theme.colors.primary} marginBottom={15}>
                            Preço
                        </TextLight>

                        <TextLight fontSize={20} color={theme.colors.primary} marginBottom={15}>
                            Marca
                        </TextLight>

                        <TextLight fontSize={20} color={theme.colors.primary} marginBottom={15}>
                            Modelo  
                        </TextLight>

                        <TextLight fontSize={20} color={theme.colors.primary} marginBottom={15}>
                            Ano modelo
                        </TextLight>

                        <TextLight fontSize={20} color={theme.colors.primary} marginBottom={15}>
                            Combustivel
                        </TextLight>

                        <TextLight fontSize={20} color={theme.colors.primary} marginBottom={15}>
                            Código FIPE
                        </TextLight>

                        <TextLight fontSize={20} color={theme.colors.primary} marginBottom={15}>
                            Mês ref.
                        </TextLight>

                        <TextLight fontSize={20} color={theme.colors.primary} marginBottom={15}>
                            Sigla Combustivel
                        </TextLight>

                        <TextLight fontSize={20} color={theme.colors.primary} marginBottom={15}>
                            Tipo veiculo
                        </TextLight>
                    </DescriptionContent>

                    <ResultContent>
                        <TextBold fontSize={30} color={theme.colors.primary} marginBottom={15} textAlign={'right'}>
                            R$ 15.102,00
                        </TextBold>

                        <TextSemiBold fontSize={20} color={theme.colors.primary} marginBottom={15} textAlign={'right'}>
                            Audi
                        </TextSemiBold>

                        <TextSemiBold fontSize={20} color={theme.colors.primary} marginBottom={15} textAlign={'right'}>
                            80 S2 Avant
                        </TextSemiBold>

                        <TextSemiBold fontSize={20} color={theme.colors.primary} marginBottom={15} textAlign={'right'}>
                            1595
                        </TextSemiBold>

                        <TextSemiBold fontSize={20} color={theme.colors.primary} marginBottom={15} textAlign={'right'}>
                            Gasolina
                        </TextSemiBold>

                        <Fipe activeOpacity={0.7}>
                            <CopySvg width={24} height={24} style={{marginRight:12}}/>
                            <TextSemiBold fontSize={20} color={theme.colors.primary} marginBottom={15} textAlign={'right'}>
                                008004-7
                            </TextSemiBold>
                        </Fipe>
                        

                        <TextSemiBold fontSize={20} color={theme.colors.primary} marginBottom={15} textAlign={'right'}>
                            janeiro de 2022
                        </TextSemiBold>

                        <TextSemiBold fontSize={20} color={theme.colors.primary} marginBottom={15} textAlign={'right'}>
                            G
                        </TextSemiBold>

                        <TextSemiBold fontSize={20} color={theme.colors.primary} marginBottom={15} textAlign={'right'}>
                            1
                        </TextSemiBold>
                    </ResultContent>
                </Content>
                </>
                }
            </ScrollView>  
            
        </Container>

        <Footer>
            <Button 
              background={theme.colors.primary}
              onPress={() => navigation.navigate('Home')}
            >
              <TextBold fontSize={18} color={theme.colors.secondary}>
                Voltar ao inicio
              </TextBold>
            </Button>
        </Footer>
        
    </Background>
  );
}