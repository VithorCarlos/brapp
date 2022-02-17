import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { Background } from '../../component/Background';
import { Breadcrumb, IParams } from '../../component/Breadcrumb';
import { Button } from '../../component/Button';
import { ButtonAdd } from '../../component/ButtonAdd';
import { TextBold, TextRegular, TextSemiBold } from '../../component/TextHeading';
import { theme } from '../../global/styles/theme';
import { IVehicle, useAuth } from '../../hooks/context';
import { api } from '../../services/api';
import { Container, Footer, ModelVehicle} from './styles';

export function VehicleModel(){
    const route = useRoute();
    const params = route.params as IParams;
    const navigation = useNavigation();
    const [model, setModel] = useState('');
    const [codeModel, setCodeModel] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [vehicleData, setVehicleData] = useState<IVehicle>({} as IVehicle);
    const [selectModel, setSelectModel] = useState<any>('');
    const [ loading, setLoading ] = useState(true);

    const {replaceCase} = useAuth();

    
    async function load(vehicle: any, codeBrandVehicle: any) { 
        const { data } = await api.get(`/${vehicle}/marcas/${codeBrandVehicle}/modelos`);
        if (data !== ''){
          setLoading(false);
          return setVehicleData(data);
        }
       
    }
    
    useEffect (() => {
        load(replaceCase(params.vehicleBreadcrumb), params.codeBrandVehicle) 
    }, [])
    
    
    useEffect(()=>{    
      if ( model !== undefined){
        setDisabled(false)
      } else {
        setDisabled(true)
      }
    },[handleModel]);
    
    function handleModel(item: string) {
      model === '' ? setModel(item) : setModel('');
    } 

    function handleGoBack() {
      navigation.goBack();
    }

    function handleModelSelected(index: number) {
      if (index === selectModel) {
        setModel(undefined)
        return setSelectModel(undefined)
      }
      setSelectModel(index);
    }

  return (
    <Background>
      <Container>
          <Breadcrumb 
              titleBreadcrumb={params.titleBreadcrumb} 
              vehicleBreadcrumb={params.vehicleBreadcrumb} 
              brandBreadcrumb={params.brandBreadcrumb.nome && params.brandBreadcrumb.nome}
              marginLeft={1}
              marginBottom={78}
          />

          <TextSemiBold fontSize={17}>
              Selecione o modelo do veiculo
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
          <ModelVehicle>
            <FlatList 
                data={vehicleData.modelos}
                keyExtractor={(item) => String(item.codigo)}
                numColumns={1}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <>
                      <ButtonAdd 
                        key={item.codigo} 
                        title={item.nome} 
                        color={theme.colors.primary} 
                        onPress={() => {
                          handleModel(item)
                          handleModelSelected(item.codigo)
                          setCodeModel(item.codigo)
                        }}
                        selected={item.codigo === selectModel}
                        />
                    </>
                    )}
              />

          </ModelVehicle>
          }
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
                  modelBreadcrumb: model,
                  codeModel: codeModel,
                  codeBrandVehicle: params.codeBrandVehicle
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