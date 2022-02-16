import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {View, ScrollView, TouchableOpacity, Text, FlatList} from 'react-native';
import {Background} from '../../component/Background';
import { Breadcrumb, IParams } from '../../component/Breadcrumb';
import { Button } from '../../component/Button';
import {ButtonAdd} from '../../component/ButtonAdd';
import {Category} from '../../component/Category';
import {TextBold, TextRegular, TextSemiBold} from '../../component/TextHeading';
import {theme} from '../../global/styles/theme';
import {categories} from '../../utils/categories';
import { VehicleBrand, Footer, ControllerText, Content} from './styles';

export function CategorySelect() {
  const route = useRoute();
  const params = route.params as IParams;

  const navigation = useNavigation();
  const [vehicle, setVehicle] = useState('');
  const [brand, setBrand] = useState('');
  const [disabled, setDisabled] = useState(true);

  function handleGoBack() {
    navigation.goBack();
  }

  function handleVeicle(title:string) {
    setVehicle(title);
  }

  function handleBrand(title: string) {
    setBrand(title);
  }

    useEffect(()=>{
      if ( vehicle && brand !== ''){
        setDisabled(false)
      } else {
        setDisabled(true)
      }
    },[handleVeicle, handleBrand])


    const data = [
      {
          id: 1,
          title: 'BMW'
      },
      {
          id: 2,
          title: 'Audi'
      },
      {
          id: 3,
          title: 'Citroën'
      },
      {
          id: 4,
          title: 'GM - Chevrolet'
      },
      {
          id: 5,
          title: 'Honda'
      },
    ];

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
          contentContainerStyle={{marginHorizontal: 20, paddingRight: 20, marginTop: 35, marginBottom: 60}}>
          {categories.map(category => (
            <Category
              key={category.id}
              setVehicle={handleVeicle}
              activeOpacity={0.7}
              title={category.title}
              icon={category.icon}
            />
          ))}
        </ScrollView>
        </View>
        <ControllerText>
          <TextSemiBold fontSize={17}>Seleciona a marca do veiculo</TextSemiBold>
        </ControllerText>
        
        <Content>
          <VehicleBrand>
              <FlatList 
                data={data}
                keyExtractor={(item) => String(item.id)}
                numColumns={3}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{marginHorizontal: 10}}
                renderItem={({item}) => (
                 <>
                    <ButtonAdd title={item.title} color={theme.colors.primary} setData={handleBrand}/>
                 </>
                   
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
