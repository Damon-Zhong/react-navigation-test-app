import React, { useEffect, useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('screen');

interface Props {
  postData: any;
  isPaused: boolean;
  muteAll: boolean;
  setMuteAll: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostContent: React.FC<Props> = ({
  postData,
  isPaused,
  muteAll,
  setMuteAll,
}) => {
  const [progress, setProgress] = useState<string>('');

  const videoRef = useRef(null);

  //   useEffect(() => {
  //     handleMute();
  //   }, [muteAll]);

  // const handleMute = () => {
  //     videoRef?.current?.
  // }
  const calProgressTime = (time: number) => {
    const minute = Math.ceil(time / 60);
    const second = Math.ceil(time) % 60;
    setProgress(`${minute}:${second < 10 ? `0${second}` : second}`);
  };

  return (
    <View>
      <View style={{ marginVertical: 10 }}>
        <Video
          source={{
            uri: postData.uri,
          }}
          ref={videoRef}
          style={styles.video}
          resizeMode="cover"
          muted={muteAll}
          paused={isPaused}
          repeat={true}
          progressUpdateInterval={1000}
          onProgress={data => {
            calProgressTime(data.playableDuration - data.currentTime);
          }}
        />
        <View style={styles.progress}>
          <Text style={styles.progressText}>{progress}</Text>
        </View>

        <TouchableOpacity
          style={styles.muteIcon}
          onPress={() => setMuteAll(prev => !prev)}>
          <Icon name={muteAll ? 'volume-off' : 'volume-high'} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostContent;

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
  progress: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  progressText: {
    color: 'white',
  },
});
