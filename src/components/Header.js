import React from "react";
import { View, StyleSheet } from "react-native";
import SearchInput from "./SearchInput";
import ProfileAvatar from "./ProfileAvatar";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <SearchInput />
        <ProfileAvatar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
    height: 115,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "center",

    alignItems: "center",
    width: "100%",
    gap: 10,
    paddingHorizontal: 5,
    marginTop: 40,
  },
});

export default Header;
