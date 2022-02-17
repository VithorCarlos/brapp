import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
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
import { api } from '../../services/api';
import { IVehicle, useAuth } from '../../hooks/context';
import { ToastAndroid } from 'react-native';


export function ResultVehicle() {
    const route = useRoute();
    const params = route.params as IParams;
    const navigation = useNavigation();
    const [ loading, setLoading ] = useState(true);
    const [ copyText, setCopyText] = useState('');

    const [vehicleData, setVehicleData] = useState<IVehicle>({} as IVehicle);
    const { replaceCase } = useAuth();

    async function load() {
        const { data } = await api.get(
            `/${replaceCase(params.vehicleBreadcrumb)}/marcas/${params.codeBrandVehicle}
            /modelos/${params.codeModel}/anos/${params.yearBreadcrumb.codigo}`);

            if (data !== ''){
                setLoading(false);
                return setVehicleData(data);
            }
    }

    useEffect(() => {
        load()
    }, [])

    function copyToClipboard(item: any) {
        Clipboard.setString(item)
        ToastAndroid.showWithGravity(
            "Copiado para área de transferência!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        )
    }

    return (
        <Background>
            <Breadcrumb
                titleBreadcrumb={params.titleBreadcrumb}
                vehicleBreadcrumb={params.vehicleBreadcrumb}
                brandBreadcrumb={params.brandBreadcrumb.nome && params.brandBreadcrumb.nome}
                modelBreadcrumb={params.modelBreadcrumb.nome && params.modelBreadcrumb.nome}
                yearBreadcrumb={params.yearBreadcrumb.nome && params.yearBreadcrumb.nome}
            />

            <Container>
                <View style={{ marginTop: 30 }}>
                    <TextSemiBold fontSize={20}>
                        Dados do veiculo
                    </TextSemiBold>
                </View>
                    {
                    loading 
                    ? 
                        <ActivityIndicator 
                            size="large" 
                            color={theme.colors.primary} 
                            style={{ flex: 1 }}
                        /> 
                    : 
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                >
                    {            
                        <>
                        <Content>
                            <DescriptionContent>
                                <TextLight fontSize={20} color={theme.colors.primary} marginBottom={15}>
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
                                    {vehicleData.Valor}
                                </TextBold>

                                <TextSemiBold fontSize={20} color={theme.colors.primary} marginBottom={15} textAlign={'right'}>
                                    {vehicleData.Marca}
                                </TextSemiBold>

                                <TextSemiBold fontSize={20} color={theme.colors.primary} marginBottom={15} textAlign={'right'}>
                                    {vehicleData.Modelo}
                                </TextSemiBold>

                                <TextSemiBold fontSize={20} color={theme.colors.primary} marginBottom={15} textAlign={'right'}>
                                    {vehicleData.AnoModelo}
                                </TextSemiBold>

                                <TextSemiBold fontSize={20} color={theme.colors.primary} marginBottom={15} textAlign={'right'}>
                                    {vehicleData.Combustivel}
                                </TextSemiBold>

                                <Fipe activeOpacity={0.7} onPress={() => (copyToClipboard(vehicleData.CodigoFipe))}>
                                    <CopySvg width={24} height={24} style={{ marginRight: 12 }} />
                                    <TextSemiBold fontSize={20} color={theme.colors.primary} marginBottom={15} textAlign={'right'}>
                                        {vehicleData.CodigoFipe}
                                    </TextSemiBold>
                                </Fipe>


                                <TextSemiBold fontSize={20} color={theme.colors.primary} marginBottom={15} textAlign={'right'}>
                                    {vehicleData.MesReferencia}
                                </TextSemiBold>

                                <TextSemiBold fontSize={20} color={theme.colors.primary} marginBottom={15} textAlign={'right'}>
                                    {vehicleData.SiglaCombustivel}
                                </TextSemiBold>

                                <TextSemiBold fontSize={20} color={theme.colors.primary} marginBottom={15} textAlign={'right'}>
                                    {vehicleData.TipoVeiculo}
                                </TextSemiBold>
                            </ResultContent>
                        </Content>
                        </>
                    
                    }
                </ScrollView>
            }
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