import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";
import BottomNavigation from "../components/BottomNavigation";

const Layout = ({ children }) => {
  const [isActive, setActive] = useState("Beranda");

  const handleTabClick = (tabName) => {
    setActive(tabName);
  };
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>{children}</ScrollView>
      <BottomNavigation isActive={isActive} handleTabClick={handleTabClick} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Layout;
