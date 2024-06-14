import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native';
import { supabase } from './conexao';

export default function App() {
  const [placaDigitada, setPlacaDigitada] = useState("");
    const [anoDigitado, setAnoDigitado] = useState("");
    const [ModeloDigitado, setModeloDigitado] = useState("");

    //Função para cadastrar veiculo

    const cadastrarVeiculo = async() => {
      const {error} = await supabase.from("tb_veiculos")
      .insert({
        col_placa: placaDigitada, 
        col_modelo: ModeloDigitado,
        col_ano: anoDigitado}
        )

        if(error){
alert("Falha ao cadastrar")
        } else{
          alert("Cadastrado com sucesso")
        }
    } 
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>Cadastro de veiculos</Text>
      <TextInput
      onChangeText={(texto)=>setPlacaDigitada(texto)}
      placeholder='Digite a placa'
      styles={styles.caixaTexto}
      
      />

<TextInput
      onChangeText={(texto)=>setModeloDigitado(texto)}
      placeholder='Digite o modelo'
      styles={styles.caixaTexto}
      
      />

<TextInput
      onChangeText={(texto)=>setAnoDigitado(texto)}
      placeholder='Digite o ano'
      styles={styles.caixaTexto}
      
      />

      <Button
      
      title="Cadastrar"
      onPress={()=> {cadastrarVeiculo()}}
      
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  caixaTexto:{
    borderWidth:1,
    borderColor:"#c5c5c56",
    padding:4,
    borderRadius:4,
    marginBottom:10
  }
});
