import React, 
{ 
    createContext, 
    ReactNode, 
    useContext,
    useState, 
} from 'react';

export interface IVehicle {
    tipo: string;
    nome: string;
    codigo: number;
    Valor: string;
    Marca: string;
    Modelo: string;
    AnoModelo: number;
    Combustivel: string;
    CodigoFipe: string;
    MesReferencia: string;
    TipoVeiculo: number
    SiglaCombustivel: string;
    replaceCase: (name: string) => string;
}

interface VehicleProviderProps {
    children: ReactNode;
}

export const VehicleContext = createContext({} as IVehicle);


export function VehicleProvider({children}: VehicleProviderProps) { 
    function replaceCase(name: string) {
        return name.toLowerCase() 
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
      }

    return (
        <VehicleContext.Provider 
            value={{
                replaceCase         
            }}
        >
            {children}
        </VehicleContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(VehicleContext);
    return context;
}
