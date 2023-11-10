import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const SearchInput = () => {
  return (
    <View style={styles.searchInputWrapper}>
      <Ionicons name="ios-search" size={22} color="black" />
      <Text style={styles.searchInput}>Cari Layanan, makanan, & tujuan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchInputWrapper: {
    flexDirection: "row",
    width: "90%",
    gap: 10,
    backgroundColor: "#f5f5f5",
    shadowColor: "#7D7C7C",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
    padding: 10,
    borderRadius: 50,
  },

  searchInput: {
    color: "#7D7C7C",
    fontSize: 14,
    marginTop: 3,
  },
});

export default SearchInput;
