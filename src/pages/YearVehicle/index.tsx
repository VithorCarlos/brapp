import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Background } from '../../component/Background';
import { Breadcrumb, IParams } from '../../component/Breadcrumb';
import { Button } from '../../component/Button';
import { ButtonAdd } from '../../component/ButtonAdd';
import { TextBold, TextSemiBold } from '../../component/TextHeading';
import { theme } from '../../global/styles/theme';
import { Content, Footer, VehicleYear } from './styles';

export function YearVehicle(){
    const route = useRoute();
    const params = route.params as IParams;
    const navigation = useNavigation();

    const [disabled, setDisabled] = useState(true);
    const [year, setYear] = useState('');

    function handleYear(title: string) {
        setYear(title);
      } 
  
      function handleGoBack() {
        navigation.goBack();
      }

      useEffect(()=>{
        if ( year !== ''){
          setDisabled(false)
        } else {
          setDisabled(true)
        }
      },[handleYear]);

      const data = [
        {
            id: 1,
            title: '1995-1 Gasolina'
        },
        {
            id: 2,
            title: '1995-1 Gasolina'
        },
      ];

  return (
    <Background>
        <Breadcrumb
            titleBreadcrumb={params.titleBreadcrumb} 
            vehicleBreadcrumb={params.vehicleBreadcrumb} 
            brandBreadcrumb={params.brandBreadcrumb}
            modelBreadcrumb={params.modelBreadcrumb} 
        />

        <Content>
            <TextSemiBold fontSize={17}>
              Selecione o ano do veiculo
            </TextSemiBold>

            <VehicleYear>
                <FlatList 
                    data={data}
                    keyExtractor={(item) => String(item.id)}
                    numColumns={2}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => (
                        <>
                        <ButtonAdd title={item.title} color={theme.colors.primary} setData={handleYear}/>
                    
                        </>
                        )}
                />
            </VehicleYear>
        </Content>

        <Footer>
            <Button
              background={theme.colors.transparent}
              style={{paddingRight: 20}}
              onPress={handleGoBack}
            >
              <TextBold fontSize={18} color={theme.colors.primary} outline>
                Voltar
              </TextBold>
            </Button>

              <Button 
                background={theme.colors.primary}
                disabled={disabled}
                onPress={() => navigation.navigate('ResultVehicle', {
                  titleBreadcrumb: params.titleBreadcrumb,
                  vehicleBreadcrumb: params.vehicleBreadcrumb,
                  brandBreadcrumb: params.brandBreadcrumb,
                  modelBreadcrumb: params.modelBreadcrumb,
                  yearBreadcrumb: year
                })}
              >
                <TextBold fontSize={18} color= {theme.colors.secondary}>
                  Pŕoximo
                </TextBold>
              </Button>
          </Footer>
    </Background>
  );
}