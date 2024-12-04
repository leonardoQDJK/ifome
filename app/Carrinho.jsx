import React, { useContext } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { AppContext } from './scripts/AppContext'; 
import { useRouter } from 'expo-router';

export default function Carrinho() {
  const router = useRouter();
  const { itens } = useContext(AppContext); 


  const calcularTotal = () => {
    return itens.reduce((total, item) => total + item.preco, 0).toFixed(2); 
  };

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Pedido:</Text>
      {itens.length > 0 ? (
        <>
          {itens.map((item, index) => (
            <Text key={index} style={styles.item}>{item.nome} - R${item.preco.toFixed(2)}</Text> 
          ))}
          <Text style={styles.total}>Total: R${calcularTotal()}</Text>
        </>
      ) : (
        <Text style={styles.item}>Nenhum item adicionado ao carrinho</Text>
        
      )}

<Pressable onPress={() => router.push('/Home')}>
                    <Text style={styles.linkText}>Fazer pedido!</Text>
                </Pressable>
        

          
      {''}
    </View>
    
  );
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#141919',
    marginLeft:'100px',
  },
  linkText:{
    backgroundColor:'#1db954',
    width:'8%',
    textAlign:'center',
    borderRadius:'5px',
    borderColor:'black',
    borderWidth:'2px',
    width:'100px',
    fontWeight: 'bold',
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor:'#1db954',
    width:'8%',
    borderRadius:'5px',
    padding:'4px',
    borderColor:'black',
    borderWidth:'2px',
    width:'100px',
    fontWeight: 'bold',

  },
  item: {
    fontSize: 18,
    width:'100px',

  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    width:'100px',
  },
});
