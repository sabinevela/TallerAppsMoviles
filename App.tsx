import { StatusBar } from 'expo-status-bar';
import {View } from 'react-native';
import { PantallaInicio } from './inicio/PantallaInicio';
import { PantallaCompra } from './segundapantalla/PantallaCompra';

export const App=()=> {
  return (
    <View>
    {/*<PantallaInicio/>*/}
    <PantallaCompra/>
    </View>
  );
}
export default App;
