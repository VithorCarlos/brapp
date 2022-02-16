import { View } from 'react-native';
import styled from 'styled-components';

export interface BreadcrumbProps {
    marginTop?: number;
    marginLeft?: number;
    marginBottom?: number;
}

export const Container = styled(View)`
    margin-top: ${(props: BreadcrumbProps) => props.marginTop || 68}px;
    margin-left: ${(props: BreadcrumbProps) => props.marginLeft || 20}px;
    margin-bottom: ${(props: BreadcrumbProps) => props.marginBottom || 38}px;;
`;