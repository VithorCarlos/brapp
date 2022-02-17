import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { Background } from '../../component/Background';
import { Breadcrumb, IParams } from '../../component/Breadcrumb';
import { Button } from '../../component/Button';
import { ButtonAdd } from '../../component/ButtonAdd';
import { TextBold, TextSemiBold } from '../../component/TextHeading';
import { theme } from '../../global/styles/theme';
import { IVehicle, useAuth } from '../../hooks/context';
import { api } from '../../services/api';
import { Content, Footer, VehicleYear } from './styles';

export function YearVehicle() {
  const route = useRoute();
  const params = route.params as IParams;
  const navigation = useNavigation();

  const [disabled, setDisabled] = useState(true);
  const [vehicleData, setVehicleData] = useState<IVehicle>({} as IVehicle);
  const [year, setYear] = useState('');
  const [selectYear, setSelectYear] = useState<any>('');
  const [ loading, setLoading ] = useState(true);

  const {replaceCase} = useAuth();

  async function load(vehicle: any, ) { 
    const { data } = await api.get(`/${vehicle}/marcas/${params.codeBrandVehicle}/modelos/${params.codeModel}/anos`);
   
    if (data !== ''){
        setLoading(false);
        return setVehicleData(data);
    }  
  }

  useEffect (() => {
    load(replaceCase(params.vehicleBreadcrumb)) 
}, [])

  function handleYear(title: string) {
    year === '' ? setYear(title) : setYear('')
  }

  function handleGoBack() {
    navigation.goBack();
  }

  function handleYearSelected(index: number) {
    if (index === selectYear) {
      setYear(undefined)
      return setSelectYear(undefined)
    }
    setSelectYear(index);
  }


  useEffect(() => {
    if (year !== undefined) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [handleYear]);

  return (
    <Background>
      <Breadcrumb
        titleBreadcrumb={params.titleBreadcrumb}
        vehicleBreadcrumb={params.vehicleBreadcrumb}
        brandBreadcrumb={params.brandBreadcrumb.nome && params.brandBreadcrumb.nome}
        modelBreadcrumb={params.modelBreadcrumb.nome && params.modelBreadcrumb.nome }
      />

      <Content>
        <TextSemiBold fontSize={17}>
          Selecione o ano do veiculo
        </TextSemiBold>

        {
          loading
          ?
            <ActivityIndicator 
            size="large" 
            color={theme.colors.primary} 
            style={{ flex: 1 }}
          /> 
          :
        <VehicleYear>
          <FlatList
            data={vehicleData}
            keyExtractor={(item) => String(item.codigo)}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{alignSelf: "center", alignItems: 'stretch'}}
            renderItem={({ item }) => (
              <View style={{width: 182}}>
                <ButtonAdd 
                title={item.nome} 
                color={theme.colors.primary} 
                onPress={() => {
                  handleYear(item.nome)
                  handleYearSelected(item.codigo)
                  setYear(item)
                }}
                selected={item.codigo === selectYear}
                />

              </View>
            )}
          />
        </VehicleYear>
         }
      </Content>

      <Footer>
        <Button
          background={theme.colors.transparent}
          style={{ paddingRight: 20 }}
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
            codeModel: params.codeModel,
            codeBrandVehicle: params.codeBrandVehicle,
            yearBreadcrumb: year
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