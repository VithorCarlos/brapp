import React from 'react';
import { TextRegular } from '../TextHeading';
import { theme } from '../../global/styles/theme';
import { BreadcrumbProps, Container } from './styles';
import { IVehicle } from '../../hooks/context';

export interface IParams extends BreadcrumbProps{
  vehicleData?: IVehicle;
  titleBreadcrumb: string;
  vehicleBreadcrumb?: string;
  brandBreadcrumb?: string;
  modelBreadcrumb?: string;
  yearBreadcrumb?: string;
}

export function Breadcrumb({ 
   titleBreadcrumb, 
   vehicleBreadcrumb,  
   brandBreadcrumb,
   modelBreadcrumb,
   yearBreadcrumb,
  ...rest}: IParams

   ){ 
  return (
    <Container {...rest}>
        <TextRegular fontSize={18} color={theme.colors.primary} outline>
            {titleBreadcrumb ? titleBreadcrumb + '>' : ''} 
            {vehicleBreadcrumb ? vehicleBreadcrumb + '>' : ''} 
            {brandBreadcrumb ? brandBreadcrumb + '>' : ''} 
            {modelBreadcrumb ? modelBreadcrumb + '>' : ''}
            {yearBreadcrumb}
        </TextRegular>
    </Container>
  );
}