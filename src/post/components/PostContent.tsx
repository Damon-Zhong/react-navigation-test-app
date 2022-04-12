import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Video from 'react-native-video';
import VideoControls from './VideoControls';

const { width } = Dimensions.get('window');

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
  const [timeProgress, setTimeProgress] = useState<number>(0);
  const [isVideoPaused, setIsVideoPaused] = useState<boolean>(isPaused);
  const [displayControl, setDisplayControl] = useState<boolean>(false);

  const videoRef = useRef(null);

  useEffect(() => {
    setIsVideoPaused(isPaused);
  }, [isPaused]);

  // const handleMute = () => {
  //     videoRef?.current?.
  // }
  const calProgressTime = (time: number) => {
    const minute = Math.floor(time / 60);
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
          paused={isVideoPaused}
          repeat={true}
          progressUpdateInterval={1000}
          onProgress={data => {
            calProgressTime(data.playableDuration - data.currentTime);
            setTimeProgress(data.currentTime / data.playableDuration);
          }}
          onReadyForDisplay={() => setDisplayControl(true)}
        />
        <View style={styles.progress}>
          <Text style={styles.progressText}>{progress}</Text>
        </View>
        <View style={styles.controlBar}>
          {displayControl && (
            <VideoControls
              progress={timeProgress}
              isMuted={muteAll}
              onMutePress={() => setMuteAll(prev => !prev)}
              isPaused={isVideoPaused}
              onPlayPress={() => setIsVideoPaused(prev => !prev)}
            />
          )}
        </View>
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
  progress: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  progressText: {
    color: 'white',
  },

  controlBar: {
    position: 'absolute',
    bottom: 10,
    width,
    paddingHorizontal: 15,
  },
});
