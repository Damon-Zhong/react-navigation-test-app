import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const UploadScreen: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Upload screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e3e3e3',
  },
});
