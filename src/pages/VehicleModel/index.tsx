import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Background } from '../../component/Background';
import { Breadcrumb, IParams } from '../../component/Breadcrumb';
import { Button } from '../../component/Button';
import { ButtonAdd } from '../../component/ButtonAdd';
import { TextBold, TextRegular, TextSemiBold } from '../../component/TextHeading';
import { theme } from '../../global/styles/theme';
import { Container, Footer, ModelVehicle} from './styles';

export function VehicleModel(){
    const route = useRoute();
    const params = route.params as IParams;
    const navigation = useNavigation();

    const [model, setModel] = useState('');
    const [disabled, setDisabled] = useState(true);

    function handleModel(title: string) {
      setModel(title);
    } 

    function handleGoBack() {
      navigation.goBack();
    }

    useEffect(()=>{
      if ( model !== ''){
        setDisabled(false)
      } else {
        setDisabled(true)
      }
    },[handleModel]);

    const data = [
      {
          id: 1,
          title: '100 2.8 V6'
      },
      {
          id: 2,
          title: '80 2.0'
      },
      {
          id: 3,
          title: '100 2.8 V6 Avant'
      },
      {
          id: 4,
          title: '80 S2 Avant'
      },
      {
          id: 5,
          title: 'A1 1.4 TFSI 122cv S-tronic 3p'
      }
    ];


  return (
    <Background>
      <Container>
          <Breadcrumb 
              titleBreadcrumb={params.titleBreadcrumb} 
              vehicleBreadcrumb={params.vehicleBreadcrumb} 
              brandBreadcrumb={params.brandBreadcrumb}
              marginLeft={1}
              marginBottom={78}
          />

          <TextSemiBold fontSize={17}>
              Selecione o modelo do veiculo
          </TextSemiBold>
         
          <ModelVehicle>
          <FlatList 
              data={data}
              keyExtractor={(item) => String(item.id)}
              numColumns={2}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                  <>
                  <ButtonAdd title={item.title} color={theme.colors.primary} setData={handleModel}/>
                  </>
                  )}
                />
          </ModelVehicle>
          <TouchableOpacity activeOpacity={0.7}>
            <TextRegular fontSize={15} color={theme.colors.primary} outline>
              Ver mais ...
            </TextRegular>
          </TouchableOpacity>
  
      </Container>

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
                onPress={() => navigation.navigate('YearVehicle', {
                  titleBreadcrumb: params.titleBreadcrumb,
                  vehicleBreadcrumb: params.vehicleBreadcrumb,
                  brandBreadcrumb: params.brandBreadcrumb,
                  modelBreadcrumb: model
                })}
              >
                <TextBold fontSize={18} color={theme.colors.secondary}>
                  Pŕoximo
                </TextBold>
              </Button>
          </Footer>
    </Background>
  );
}