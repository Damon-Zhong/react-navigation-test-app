import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ExploreScreen: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Explore screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e3e3e3',
  },
});
