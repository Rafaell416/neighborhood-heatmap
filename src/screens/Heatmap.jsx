import React, { useRef, useState } from "react";
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE, Polygon } from "react-native-maps";


import DangerIndicator from "../components/DangerIndicator";

const initialRegion = {
  // latitude: 6.230833,
  // longitude: -75.590553,
  latitude: 6.267417,
  longitude: -75.568389,
  latitudeDelta: 0.02,
  longitudeDelta: 0.02,
};

function Heatmap({ navigation }) {
  const mapReference = useRef(null);
  // const [region, setRegion] = useState(initialRegion);


  // console.log(region)

  // const _handleRegionChange = (r) => {
  //   //setRegion(r);
  // };
  return (
    <View style={styles.container}>
      <MapView
        ref={mapReference}
        //region={region}
        initialRegion={initialRegion}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        showsMyLocationButton
        zoomEnabled
      >
        <Polygon
          onPress={() => console.log('1')}
          tappable
          coordinates={[
            { latitude: 6.265146, longitude: -75.572225 },
            { latitude: 6.264454, longitude: -75.567573 },
            { latitude: 6.256915, longitude: -75.571943 },
            { latitude: 6.260625, longitude: -75.573899 }
          ]}
          strokeWidth={0}
          strokeColor="transparent"
          fillColor="rgba(231, 77, 60, 0.1)"
        />
        <Polygon coordinates={[
          { latitude: 6.260567, longitude: -75.573921 },
          { latitude: 6.255767, longitude: -75.571218 },
          { latitude: 6.254061, longitude: -75.571218 },
          { latitude: 6.252995, longitude: -75.569437 },
          { latitude: 6.249710, longitude: -75.570939 },
          { latitude: 6.250968, longitude: -75.574157 },
          { latitude: 6.251011, longitude: -75.575101 },
          { latitude: 6.252973, longitude: -75.575037 },
          { latitude: 6.254338, longitude: -75.577269 }
        ]}
          tappable
          onPress={() => navigation.navigate("Detail")}
          strokeWidth={0}
          strokeColor="transparent"
          fillColor="rgba(231, 77, 60, 0.5)"
        />
      </MapView>
      <DangerIndicator />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Heatmap;