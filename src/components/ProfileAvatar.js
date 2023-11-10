import React from "react";

import { View, Image, StyleSheet } from "react-native";

const ProfileAvatar = () => {
  return (
    <View>
      <Image
        style={styles.profileAvatar}
        source={require("../assets/images/profileMufki.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileAvatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});

export default ProfileAvatar;
