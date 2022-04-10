import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import PostList from '../post/components/PostList';

const { width } = Dimensions.get('screen');

//volume-high volume-off
//https://firebasestorage.googleapis.com/v0/b/social-24b7f.appspot.com/o/post-image-video%2F03558880-3a87-4525-a807-f928a41bf6e5.mp4?alt=media&token=e37642e7-11f2-4dc7-9d34-76986e4a6a67
const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <PostList
        listData={[
          {
            id: 1,
            uri: 'https://firebasestorage.googleapis.com/v0/b/social-24b7f.appspot.com/o/post-image-video%2F03558880-3a87-4525-a807-f928a41bf6e5.mp4?alt=media&token=e37642e7-11f2-4dc7-9d34-76986e4a6a67',
          },
          {
            id: 2,
            uri: 'https://firebasestorage.googleapis.com/v0/b/social-24b7f.appspot.com/o/post-image-video%2F03558880-3a87-4525-a807-f928a41bf6e5.mp4?alt=media&token=e37642e7-11f2-4dc7-9d34-76986e4a6a67',
          },
          {
            id: 3,
            uri: 'https://firebasestorage.googleapis.com/v0/b/social-24b7f.appspot.com/o/post-image-video%2F03558880-3a87-4525-a807-f928a41bf6e5.mp4?alt=media&token=e37642e7-11f2-4dc7-9d34-76986e4a6a67',
          },
          {
            id: 4,
            uri: 'https://firebasestorage.googleapis.com/v0/b/social-24b7f.appspot.com/o/post-image-video%2F03558880-3a87-4525-a807-f928a41bf6e5.mp4?alt=media&token=e37642e7-11f2-4dc7-9d34-76986e4a6a67',
          },
          {
            id: 5,
            uri: 'https://firebasestorage.googleapis.com/v0/b/social-24b7f.appspot.com/o/post-image-video%2F03558880-3a87-4525-a807-f928a41bf6e5.mp4?alt=media&token=e37642e7-11f2-4dc7-9d34-76986e4a6a67',
          },
          {
            id: 6,
            uri: 'https://firebasestorage.googleapis.com/v0/b/social-24b7f.appspot.com/o/post-image-video%2F03558880-3a87-4525-a807-f928a41bf6e5.mp4?alt=media&token=e37642e7-11f2-4dc7-9d34-76986e4a6a67',
          },
          {
            id: 7,
            uri: 'https://firebasestorage.googleapis.com/v0/b/social-24b7f.appspot.com/o/post-image-video%2F03558880-3a87-4525-a807-f928a41bf6e5.mp4?alt=media&token=e37642e7-11f2-4dc7-9d34-76986e4a6a67',
          },
          {
            id: 8,
            uri: 'https://firebasestorage.googleapis.com/v0/b/social-24b7f.appspot.com/o/post-image-video%2F03558880-3a87-4525-a807-f928a41bf6e5.mp4?alt=media&token=e37642e7-11f2-4dc7-9d34-76986e4a6a67',
          },
          {
            id: 9,
            uri: 'https://firebasestorage.googleapis.com/v0/b/social-24b7f.appspot.com/o/post-image-video%2F03558880-3a87-4525-a807-f928a41bf6e5.mp4?alt=media&token=e37642e7-11f2-4dc7-9d34-76986e4a6a67',
          },
          {
            id: 10,
            uri: 'https://firebasestorage.googleapis.com/v0/b/social-24b7f.appspot.com/o/post-image-video%2F03558880-3a87-4525-a807-f928a41bf6e5.mp4?alt=media&token=e37642e7-11f2-4dc7-9d34-76986e4a6a67',
          },
          {
            id: 11,
            uri: 'https://firebasestorage.googleapis.com/v0/b/social-24b7f.appspot.com/o/post-image-video%2F03558880-3a87-4525-a807-f928a41bf6e5.mp4?alt=media&token=e37642e7-11f2-4dc7-9d34-76986e4a6a67',
          },
          {
            id: 12,
            uri: 'https://firebasestorage.googleapis.com/v0/b/social-24b7f.appspot.com/o/post-image-video%2F03558880-3a87-4525-a807-f928a41bf6e5.mp4?alt=media&token=e37642e7-11f2-4dc7-9d34-76986e4a6a67',
          },
          {
            id: 13,
            uri: 'https://firebasestorage.googleapis.com/v0/b/social-24b7f.appspot.com/o/post-image-video%2F03558880-3a87-4525-a807-f928a41bf6e5.mp4?alt=media&token=e37642e7-11f2-4dc7-9d34-76986e4a6a67',
          },
          {
            id: 14,
            uri: 'https://firebasestorage.googleapis.com/v0/b/social-24b7f.appspot.com/o/post-image-video%2F03558880-3a87-4525-a807-f928a41bf6e5.mp4?alt=media&token=e37642e7-11f2-4dc7-9d34-76986e4a6a67',
          },
        ]}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e3e3e3',
  },
  video: {
    width,
    aspectRatio: 1,
  },
  muteIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  progress: {},
});
