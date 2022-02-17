import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import { Routes } from './src/routes';
import { Background } from './src/component/Background';
import { VehicleProvider } from './src/hooks/context';

export default function App() {
 
  return (

    <Background>
        <StatusBar 
          barStyle='dark-content'
          backgroundColor='transparent'
    
          translucent
        />
      <VehicleProvider>
        <Routes/>
      </VehicleProvider>
    </Background>
  );
};

