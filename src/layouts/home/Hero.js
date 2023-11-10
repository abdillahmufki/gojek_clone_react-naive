import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Hero = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>
            Pilih MODE HEMAT {"\n"}biar ongkir gak berat
          </Text>
          <Text style={styles.subheading}>
            GoFood-in Sekarang{" "}
            <Ionicons
              name="ios-arrow-forward-circle-sharp"
              size={12}
              color="#000"
            />
          </Text>
        </View>
        <Image
          style={styles.imageBanner}
          source={require("../../assets/images/banner.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#EEE2DE",
  },
  container: {
    paddingHorizontal: 30,
    paddingVertical: 25,
    display: "flex",
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    height: 190,
    marginTop: 15,
    alignContent: "center",
  },
  heading: {
    paddingLeft: 30,
    color: "#000",
    fontSize: 20,
    textAlign: "left",
    fontWeight: "bold",
  },
  subheading: {
    paddingLeft: 30,
    marginTop: 10,
    color: "#000",
    fontSize: 14,
    textAlign: "left",
  },
  imageBanner: {
    width: 200,
    height: 150,
    marginRight: 20,
  },
});

export default Hero;
