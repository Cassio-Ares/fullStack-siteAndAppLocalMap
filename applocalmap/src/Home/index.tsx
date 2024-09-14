import { SafeAreaView, Text, StyleSheet, Platform, View, FlatList, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { categories } from "./Category";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export interface IMarker {
    id: string,
    name: string
    category: string,
    description: string,
    contact: string,
    latitude: number,
    longitude: number
}

export default function Home() {
    const [markers, setMarkers] = useState<IMarker[]>([])
    const [filter, setFilter] = useState('')
    const navigation = useNavigation()

   const filterData = markers.filter((mark)=> mark.category === filter)


    useEffect(() => {
        fetch("ip da maquina/store").then(async (request) => {
            const data = await request.json()

            setMarkers(data)
        })
    }, [])

    if (!markers || markers.length === 0) {
        return <ActivityIndicator />
    }

    return (
        <SafeAreaView style={styles.homeContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Bem Vindo</Text>
                <Text style={styles.subTitle}>Encontre no mapa os pontos comércias locais</Text>
            </View>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: markers[0].latitude,
                    longitude: markers[0].longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            >
                {(filter ? filterData : markers).map((item) => {
                    return (
                        <Marker
                            key={item.id}
                            coordinate={{ latitude: item.latitude, longitude: item.longitude }}
                            onPress={() => {
                                // navigation.navigate('Details', item)
                                //navigation.navigate('Details', { ...item });
                            }}
                        />
                    )
                })}

            </MapView>
            <View style={styles.categoriesContainer}>
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ alignItems: 'center' }}
                    ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                setFilter(filter === item.key ? "" : item.key)
                            }}
                            style={
                                [
                                    styles.categoriesItems, 
                                    filter === item.key ? styles.selectedCategory : null
                                ]
                            } key={item.key}>
                            <Image style={styles.categoriesImage} source={item.image} />
                            <Text style={styles.categoriesText}>{item.label}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: '#e9e2e2'
    },
    headerContainer: {
        padding: 20,
        paddingTop: Platform.OS === "android" ? 50 : 0,
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
    map: {
        flex: 1
    },
    categoriesContainer: {
        padding: 10
    },
    categoriesItems: {
        height: 110,
        backgroundColor: '#f0f0f5',
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    categoriesImage: {
        width: 50,
        height: 50
    },
    categoriesText: {
        textAlign: 'center',
        color: '#6c6c80'
    },
    selectedCategory:{
        backgroundColor:'#fff',
        borderWidth: 1,
        borderColor: '#322153'
    }
})