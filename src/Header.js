import React from "react";

import { View, Text, StyleSheet } from "react-native";
import { Constants } from "expo";

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Header</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    height: Constants.statusBarHeight + 44,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  headerText: {
    fontSize: 18,
    textAlign: "center"
  }
});

export default Header;
