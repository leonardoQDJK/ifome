import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { AppContext } from './scripts/AppContext'; 
import { useNavigation } from '@react-navigation/native';



export default function Page() {
    
  const { contador, adicionarItem } = useContext(AppContext);

  const handleCompra = (item) => { 
    adicionarItem(item); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>IFOME</Text>
      </View>

      <View style={styles.counterContainer}>
        <Text style={styles.counter}>Itens no carrinho: {contador}</Text>
        <Pressable onPress={() => navigation.navigate('Carrinho')} style={styles.link}> {}
          <Image
            source={{ uri: 'https://img.freepik.com/vetores-premium/icone-de-carrinho-de-compras-rapido_414847-513.jpg?w=2000' }} 
            style={styles.bannerImage}
          />
        </Pressable>
      </View>

      <View style={styles.itemContainer}>
        <View style={styles.itemContent}>
          <View>
            <Text style={styles.title2}>Hamburguer</Text>
            <Text>Kobrasol</Text>
            <Text style={styles.title2}>R$28,00</Text>
             <Pressable onPress={() => handleCompra('Hamburguer     R$28,00')} style={styles.botao}> {/*função handle sendo chamada e alterada para mostrar o item na página "carrinho" */}
              <Text style={styles.title2}>Comprar</Text>
            </Pressable>
          </View>
          <Image
            source={{ uri: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRRto3IlY56MlAIOAvXHvPEVxBDVzG1uz1zULEBYdJ-I4Aa-xOyPEVvv7fmIjLnxaOz' }}
            style={styles.image}
          />
        </View>
        <View style={styles.separator} />
      </View>

      <View style={styles.itemContainer}>
        <View style={styles.itemContent}>
          <View> 
            <Text style={styles.title2}>Coxinha</Text> 
            <Text>Palhoça</Text> 
            <Text style={styles.title2}>R$5,00</Text> 
            <Pressable onPress={() => handleCompra('Coxinha     R$5,00')} style={styles.botao}>
              <Text style={styles.title2}>Comprar</Text>
            </Pressable>
          </View> 
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.h6k-OqCxAQkRT6EJc2CVCwHaE7?rs=1&pid=ImgDetMain' }} style={styles.image}/> 
        </View> 
        <View style={styles.separator} />
      </View>

      <View style={styles.itemContainer}>
        <View style={styles.itemContent}> 
          <View> 
            <Text style={styles.title2}>Pão de queijo</Text> 
            <Text>Barreiros</Text> 
            <Text style={styles.title2}>R$4,00</Text> 
            <Pressable onPress={() => handleCompra('Pão de queijo     R$4,00')} style={styles.botao}>
              <Text style={styles.title2}>Comprar</Text>
            </Pressable>
          </View> 
          <Image source={{ uri: 'https://www.thespruceeats.com/thmb/hLaGSiR_3PYxy9WIdkcKK37mhqc=/4494x3000/filters:fill(auto,1)/pao-de-queijo-brazilian-cheese-bread-3028981-hero-01-350503d3d0304dee952f75f6cca3fe8f.jpg' }} 
          style={styles.image} /> 
        </View> 
        <View style={styles.separator} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#141919',
    flex: 1,
    padding: 24,
  },
  header: {
    flex: 1,
    backgroundColor: "#1db954",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    width: 300,
    borderRadius:'5px',
    borderColor:'black',
    borderWidth:'2px'
  },
  title: {
    fontSize: 30,
    fontStyle: 'italic',
  },
  title2: {
    fontSize: 20,
    color:"#141919",
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: "#1db999",
    padding: 10,
    borderRadius: 5,
    alignItems: 'center', 
    justifyContent: "center",
    marginTop: 5,
    width: 130,
    borderRadius:'5px',
    borderColor:'black',
    borderWidth:'2px',
  },
  itemContainer: {
    marginBottom: 10,
    backgroundColor: "#1db954",
    padding: 30,
    borderRadius: 50,
  },
  itemContent: {
    flexDirection: "row",
    
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 10,
    
  },
  separator: {
    height: 2,
    width: "100%",
    backgroundColor: 'lightgray',
    marginVertical: 10,
    width: 300

  },
  link: {
    marginVertical: 10,
  },
  bannerImage: {
    height: 60,
    width: 60,
   
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
});
