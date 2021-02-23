import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PropTypes from "prop-types";

const DashboardView = (props) => {
  return (
    <View style={styles.container}>
      <Text>Dashbard View</Text>
      <Button
        title="Go To Main Page"
        onPress={() => props.navigation.navigate("Home")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DashboardView;

DashboardView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
