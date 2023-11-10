import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const TabIcon = ({ name, label, color }) => {
  return (
    <View style={styles.tabIcon}>
      <Ionicons name={name} size={22} color={color} />
      <Text style={styles.tabLabel}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    flexDirection: "column",
    alignItems: "center",
  },
  tabLabel: {
    fontSize: 12,
  },
});

export default TabIcon;
