import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

//* Permite obtener la dimension de la pantalla del movil en horizontal(ancho y alto)
//* EL width y height nunca cambian
// const { width, height } = Dimensions.get('window');

export const DimensionScreen = () => {
  //* Hook igual a "Dimensions.get('window')" solo que los valores cambian al usar el movil en horizontal
  const { width, height } = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            ...styles.purpleBox,
            width: width * 0.5,
          }}
        />
      </View>

      <Text style={styles.title}>
        w: {width} h: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    width: 300,
    height: 300,
    backgroundColor: 'red',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    height: '50%',
    width: '50%',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
