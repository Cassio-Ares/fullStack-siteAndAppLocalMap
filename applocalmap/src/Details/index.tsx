import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { IMarker } from '../Home';
import { useEffect, useState } from 'react';

type DetailsRoutes = RouteProp<{ details: IMarker }, 'details'>

export default function Details() {
  const [address, setAddress] = useState<any>()

  const { params } = useRoute<DetailsRoutes>()

  const navigation = useNavigation()

  // useEffect(() => {
  //   fetch(
  //     `https://nominatim.openstreetmap.org/reverse?lat=${params.latitude}&lon=${params.longitude}&format=json`
  //   ).then(async (request) => {
  //     const data = await request.json();

  //     setAddres(data);
  //     navigation.setOptions({
  //       title: params.name,
  //     });
  //   });
  // }, []);

  return (
    <SafeAreaView style={styles.detailsContainer}>
      <Text style={styles.title}>{params.name}</Text>
      <Text style={styles.subTitle}>{params.description}</Text>

      <Text style={styles.section}>{params.contact}</Text>
      <Text style={styles.text}>{params.contact}</Text>

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
  section:{
    fontSize: 16,
    fontWeight: "400",
    color: '#322153',
    paddingTop:20
  },
  text:{
    fontSize: 12,
    fontWeight: "400",
    color: '#6c6c80'
  }
})