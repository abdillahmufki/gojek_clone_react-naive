import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const TabButton = ({ icon, label, isActive, onClick }) => (
  <TouchableOpacity onPress={() => onClick(label)}>
    <View style={styles.tabButton}>
      <Ionicons name={icon} size={22} color={isActive ? "green" : "#000"} />
      <Text style={styles.tabLabel}>{label}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  tabButton: {
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  },
});

export default TabButton;
