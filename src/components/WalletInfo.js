import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const WalletInfo = () => {
  return (
    <View style={styles.walletInfo}>
      <View style={styles.walletIcon}>
        <Ionicons name="ios-wallet" size={18} color="#00B3E1" />
      </View>
      <View>
        <View style={styles.walletDetails}>
          <Text style={styles.walletText}>Rp296</Text>
          <Ionicons name="add-circle-outline" size={16} color="green" />
        </View>
        <Text style={styles.refreshText}>Klik buat refresh</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  walletInfo: {
    flexDirection: "row",
    gap: 10,
  },
  walletIcon: {
    backgroundColor: "#f5f5f5",
    padding: 5,
    borderRadius: 50,
  },
  walletDetails: {
    flexDirection: "row",
    gap: 20,
  },
  walletText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  refreshText: {
    fontSize: 12,
    color: "green",
    fontWeight: "700",
  },
});

export default WalletInfo;
