import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  postData;
}

const PostTitle: React.FC<Props> = () => {
  return (
    <View>
      <Text>PostTitle</Text>
    </View>
  );
};

export default PostTitle;

const styles = StyleSheet.create({});
