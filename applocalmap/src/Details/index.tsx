import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Image, SafeAreaView, StyleSheet, Text } from 'react-native';
import { IMarker } from '../Home';
import { useEffect, useState } from 'react';

type DetailsRoutes = RouteProp<{ details: IMarker }, 'details'>

export default function Details() {
  const [address, setAddress] = useState<any>()

  const { params } = useRoute<DetailsRoutes>()

  const navigation = useNavigation()

  useEffect(() => {
    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${params.latitude}&lon=${params.longitude}&format=json`
    ).then(async (request) => {
      const data = await request.json();

      setAddress(data);
      navigation.setOptions({
        title: params.companyName,
      });
    });
  }, []);

 
  return (
    <SafeAreaView style={styles.detailsContainer}>

      <Text style={styles.section}>Descrição</Text>
      <Text style={styles.text}>{params.description}</Text>

      <Image 
        style={styles.img}
        source={require('../../assets/media/placeholder.jpg')}
      />

      <Text style={styles.section}>Telefone</Text>
      <Text style={styles.text}>{params.phone}</Text>

      <Text style={styles.section}>E-mail</Text>
      <Text style={styles.text}>{params.email}</Text>

      <Text style={styles.section}>Endereço</Text>
      <Text style={styles.text}>{address?.address.road}</Text>
      <Text style={styles.text}>{address?.address.city}</Text>
      <Text style={styles.text}>{address?.address.postCode}</Text>
      <Text style={styles.text}>{address?.address.state}</Text> 
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    backgroundColor: '#e9e2e2',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "400",
    color: '#322153'
  },
  subTitle: {
    fontSize: 14,
    fontWeight: "400",
    color: '#6c6c80'
  },
  section: {
    fontSize: 20,
    fontWeight: "400",
    color: '#322153',
    paddingTop: 20
  },
  text: {
    fontSize: 15,
    fontWeight: "400",
    color: '#6c6c80'
  },
  img:{
    width:350,
    height:300,
    marginTop:15
  }
})