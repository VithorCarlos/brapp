import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';
import { CategorySelect } from '../pages/CategorySelect';
import { VehicleModel } from '../pages/VehicleModel';
import { YearVehicle } from '../pages/YearVehicle';
import { ResultVehicle } from '../pages/ResultVehicle';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
  return (
    <Navigator
        screenOptions={{
            headerShown: false,  
        }}  
                     
    >
        <Screen
            name='Home'
            component={Home}
        />

        <Screen
            name='CategorySelect'
            component={CategorySelect}
        />

        <Screen
            name='VehicleModel'
            component={VehicleModel}
        />

        <Screen
            name='YearVehicle'
            component={YearVehicle}
        />

        <Screen
            name='ResultVehicle'
            component={ResultVehicle}
        />
    </Navigator>
  );
}