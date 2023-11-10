import React from "react";
import { View, StyleSheet } from "react-native";
import TabButton from "./TabButton";

const BottomNavigation = ({ isActive, handleTabClick }) => {
  const tabs = [
    { icon: "ios-home-sharp", label: "Beranda" },
    { icon: "ios-pricetags-sharp", label: "Promo" },
    { icon: "ios-cart-sharp", label: "Pesanan" },
    { icon: "ios-chatbox", label: "Chat" },
  ];

  return (
    <View style={styles.bottomNav}>
      <View style={styles.itemWrapperBtmNav}>
        {tabs.map((tab) => (
          <TabButton
            key={tab.label}
            icon={tab.icon}
            label={tab.label}
            isActive={isActive === tab.label}
            onClick={handleTabClick}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    backgroundColor: "#fff",

    padding: 10,
    height: 100,
    shadowColor: "#7D7C7C",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 3.22,
    elevation: 2,
  },

  itemWrapperBtmNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 20,
  },
});

export default BottomNavigation;
