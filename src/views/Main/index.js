import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import style from "./styles";
import PropTypes from "prop-types";

const MainView = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Main View</Text>
      <Button
        title="Go To Dashboard Page"
        onPress={() => navigation.navigate("Dashboard")}
      />
    </View>
  );
};

const styles = StyleSheet.create(style);

export default MainView;

MainView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
