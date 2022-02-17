import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {View, ScrollView, TouchableOpacity, Text, FlatList, ActivityIndicator} from 'react-native';
import {Background} from '../../component/Background';
import { Breadcrumb, IParams } from '../../component/Breadcrumb';
import { Button } from '../../component/Button';
import {ButtonAdd} from '../../component/ButtonAdd';
import {Category} from '../../component/Category';
import {TextBold, TextRegular, TextSemiBold} from '../../component/TextHeading';
import {theme} from '../../global/styles/theme';
import { IVehicle, useAuth } from '../../hooks/context';
import {categories} from '../../utils/categories';
import { VehicleBrand, Footer, ControllerText, Content} from './styles';
import { api } from '../../services/api';

export function CategorySelect() {
  const route = useRoute();
  const params = route.params as IParams;
  const navigation = useNavigation();
  const replace = useAuth();
  const [vehicle, setVehicle] = useState('Carros');
  const [codeBrandVehicle, setCodeBrandVechicle ] = useState('');
  const [brand, setBrand] = useState<any>('');
  const [selectVehicle, setSelectVehicle] = useState<any>('');
  const [selectBrand, setSelectBrand] = useState<any>('');
  const [disabled, setDisabled] = useState(true);
  const [vehicleData, setVehicleData] = useState<IVehicle>({} as IVehicle);
  const [ loading, setLoading ] = useState(true);

  async function load(vehicle: string) {
    const {data} = await api.get(`/${vehicle}/marcas`);
    if (data !== ''){
      setLoading(false);
      return setVehicleData(data);
    }
  }

  useEffect(() => {
    if (vehicle == 'Carros'){
      load(vehicle);
      setSelectVehicle(0)
    }
  }, [])

  function handleGoBack() {
    navigation.goBack();
  }

  function handleVehicle(item: any) {
    vehicle === '' ? setVehicle(item) : setVehicle('');
  }
  
  function handleBrand(item: any) {
    brand === '' ? setBrand(item) : setBrand('');  
    setCodeBrandVechicle(item);
  }

  function handleVehicleSelected(index: number) {
    setSelectVehicle(index);
  }

  function handleBrandSelected(index: number) {
    if (index === selectBrand) {
      setBrand(undefined)
      return setSelectBrand(undefined)
    }
    setSelectBrand(index);
  }

    useEffect(()=>{
      if ( vehicle && brand !== ''){
        setDisabled(false)
      } else {
        setDisabled(true)
      }
    },[handleVehicle, handleBrand])

  return (
    <Background>
      <Breadcrumb 
        titleBreadcrumb={params.titleBreadcrumb} 
        vehicleBreadcrumb={vehicle}
      />
      <View>
        <ControllerText>
          <TextSemiBold fontSize={17}>
            Selecione o tipo de veiculo
          </TextSemiBold>
        </ControllerText>
        
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={
            {marginHorizontal: 20, paddingRight: 20, marginTop: 35, marginBottom: 60}}>
          {categories.map((category, index) => (
            <>
              <Category
                key={category.id}
                activeOpacity={0.7}
                onPress={() => {
                  handleVehicle(category.title)
                  load(replace.replaceCase(category.title))
                  setVehicle(category.title)
                  handleVehicleSelected(index)
                }}
                selected={index === selectVehicle}
                title={category.title}
                icon={category.icon}
              />
            </>
          ))}
        </ScrollView>
        </View>
        <ControllerText>
          <TextSemiBold fontSize={17}>Seleciona a marca do veiculo</TextSemiBold>
        </ControllerText>
        { loading 
          ?
            <ActivityIndicator 
            size="large" 
            color={theme.colors.primary} 
            style={{ flex: 1 }}
      /> 
          :
        <Content>
          <VehicleBrand>
              <FlatList 
                data={vehicleData}
                keyExtractor={(item) => String(item.codigo)}
                numColumns={2}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{alignSelf: "center", alignItems: 'stretch'}}
                renderItem={({item}) => (
                 <View style={{width: 182}}>
                    <ButtonAdd title={item.nome} 
                      color={theme.colors.primary} 
                      onPress={() => {
                      handleBrand(item)
                      setCodeBrandVechicle(item.codigo)
                      handleBrandSelected(item.codigo)
                    }}
                      selected={item.codigo === selectBrand}
                    />
                 </View>
                  )}
                  />
          </VehicleBrand>
          <ControllerText>
            <TouchableOpacity activeOpacity={0.7}>
              <TextRegular fontSize={15} color={theme.colors.primary} outline>
                Ver mais ...
              </TextRegular>
            </TouchableOpacity>
          </ControllerText>
        </Content>
        }
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
              onPress={() => navigation.navigate('VehicleModel', {
                titleBreadcrumb: params.titleBreadcrumb,
                vehicleBreadcrumb: vehicle,
                brandBreadcrumb: brand,
                vehicleData: vehicleData,
                codeBrandVehicle: codeBrandVehicle
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
