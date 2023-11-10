import React from "react";
import { View, StyleSheet, Text } from "react-native";
import IonIcons from "@expo/vector-icons/Ionicons";

const AllFeature = () => {
  const features = [
    {
      icon: "ios-bicycle-sharp",
      name: "GoRide",
      color: "green",
    },
    {
      icon: "ios-car-sharp",
      name: "GoCar",
      color: "green",
    },
    {
      icon: "ios-fast-food-sharp",
      name: "GoFood",
      color: "red",
    },
    {
      icon: "ios-cube-sharp",
      name: "GoSend",
      color: "green",
    },
    {
      icon: "ios-cart-sharp",
      name: "GO-SHOP",
      color: "red",
    },
    {
      icon: "bandage-outline",
      name: "GO-MED",
    },
    {
      icon: "ios-umbrella-sharp",
      name: "GO-TIX",
    },
    {
      icon: "ios-airplane-sharp",
      name: "GO-TRAVEL",
    },
  ];

  const row1Features = features.slice(0, 4);
  const row2Features = features.slice(4);

  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={styles.row}>
          {row1Features.map((feature, index) => (
            <View style={styles.feature} key={index}>
              <IonIcons name={feature.icon} size={40} color={feature.color} />
              <Text style={styles.text}>{feature.name}</Text>
            </View>
          ))}
        </View>
        <View style={styles.row}>
          {row2Features.map((feature, index) => (
            <View style={styles.feature} key={index}>
              <IonIcons name={feature.icon} size={40} color={feature.color} />
              <Text style={styles.text}>{feature.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  feature: {
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
});

export default AllFeature;
