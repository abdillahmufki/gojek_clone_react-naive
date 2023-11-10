import React from "react";
import { View, StyleSheet } from "react-native";
import TabIcon from "./TabIcon";

const TabIcons = () => {
  return (
    <View style={styles.tabIcons}>
      <TabIcon name="ios-arrow-up-circle-sharp" label="Bayar" color="#00B3E1" />
      <TabIcon name="ios-document-text-sharp" label="Riwayat" color="#00B3E1" />
      <TabIcon
        name="ios-ellipsis-horizontal-circle-sharp"
        label="Lainnya"
        color="#00B3E1"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabIcons: {
    flexDirection: "row",
    gap: 14,
  },
});

export default TabIcons;
