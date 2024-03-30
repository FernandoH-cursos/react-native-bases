/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import {SafeAreaView} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons'
  ;
import { HomeworkScreen } from './src/presentation/screens';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        //* Habilita el uso de iconos personalizados en componentes de React Native Paper
        icon: (props) => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name="Fernando Herrera" /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionScreen/> */}
        {/* <PositionScreen/> */}
        {/* <FlexScreen/> */}
        {/* <FlexDirectionScreen/> */}
        <HomeworkScreen/>
      </SafeAreaView>
    </PaperProvider>
  );
}
