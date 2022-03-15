import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {

  const [Celsius, setTemp] = useState('');

  function CalcularTemperatura() {

    const v1 = parseFloat(Celsius);



    const Fahrenheit = ((v1*9)+160)/5



    alert('O valor da conversão é de ' + Fahrenheit + ' graus Farehnheit');

  }



  return (

    <View style={styles.container}>

    <Text style={styles.titulo}> Conversor Celsius - Fahrenheit</Text>


    <Image style={styles.imagem, {width: 200, height:200, borderRadius: 25, marginTop:7,}}

     source={{uri: 'https://img.freepik.com/vetores-gratis/termometro-quente-e-frio-termometros-de-temperatura-com-escala-celsius-e-fahrenheit-icone-de-meteorologia-do-termostato_176516-112.jpg?w=826'}} 

    /> 

      <TextInput

        style={styles.campo}

        onChangeText={setTemp}

        placeholder="Temperatura em Celsius"

        keyboardType="numeric"

      />



      <TouchableOpacity

        style={styles.botao}

        onPress={CalcularTemperatura}

      >

        <Text style={styles.textoBotao}>Calcular</Text>

      </TouchableOpacity>



    </View>

  );

}



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#e9e9e9',

    justifyContent: 'center',

    alignItems: 'center'

  },

  titulo: {

    textAlign: 'center',

    marginTop: 60,

    fontSize: 30,

    color: '#696069'

  },

  campo: {

    backgroundColor: '#D3D3D3',

    borderRadius: 5,

    margin: 15,

    padding: 13,

    color: '#000',

    fontSize: 20,
    fontStyle: 'italic', 

  },

  botao: {

    width: 300,

    height: 50,

    justifyContent: 'center',

    alignItems: 'center',

    margin: 15,

    backgroundColor: '#D3D3D3',

    padding: 10,

    borderRadius: 3

  },

  textoBotao: {

    color: '#000',

    fontSize: 25,

  }

}); 