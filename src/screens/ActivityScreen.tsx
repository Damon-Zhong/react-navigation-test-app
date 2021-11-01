import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ActivityScreen: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Activity screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="To sub screen"
        onPress={() => navigation.push('ActivitySubScreen')}
      />
    </View>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e3e3e3',
  },
});
