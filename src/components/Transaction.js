import React from "react";
import { View, StyleSheet } from "react-native";
import WalletInfo from "./WalletInfo";
import TabIcons from "./TabIcons";

const Transaction = () => {
  return (
    <View style={styles.transaction}>
      <WalletInfo />
      <TabIcons />
    </View>
  );
};

const styles = StyleSheet.create({
  transaction: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 175,
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    gap: 5,
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#7D7C7C",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
  },
});

export default Transaction;
