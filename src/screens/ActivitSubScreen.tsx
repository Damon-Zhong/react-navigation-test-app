import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ActivitSubScreen: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Activity sub screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="To sub screen"
        onPress={() => navigation.push('ActivitySubScreen')}
      />
    </View>
  );
};

export default ActivitSubScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e3e3e3',
  },
});
