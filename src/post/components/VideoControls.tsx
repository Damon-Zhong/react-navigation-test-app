import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  progress: number;
  isPaused: boolean;
  isMuted: boolean;
  onPlayPress: () => void;
  onMutePress: () => void;
  onFullScreenPress?: () => void;
}

const { width } = Dimensions.get('window');

const VideoControls: React.FC<Props> = ({
  progress,
  isPaused,
  onPlayPress,
  isMuted,
  onMutePress,
  onFullScreenPress,
}) => {
  const [progressWidth, setProgressWidth] = useState(
    new Animated.Value(progress * width * 0.6),
  );

  useEffect(() => {
    setProgressWidth(new Animated.Value(progress * width * 0.6));
  }, [progress]);

  return (
    <View style={styles.controlContainer}>
      <TouchableOpacity style={styles.controlIcon} onPress={onPlayPress}>
        <Icon name={isPaused ? 'play' : 'pause'} size={24} color="white" />
      </TouchableOpacity>

      <View style={styles.progressContainer}>
        <Animated.View style={{ ...styles.fill, width: progressWidth }} />
      </View>

      {onFullScreenPress && (
        <TouchableOpacity
          style={styles.controlIcon}
          onPress={onFullScreenPress}>
          <Icon name="fullscreen" size={24} color="white" />
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.controlIcon} onPress={onMutePress}>
        <Icon
          name={isMuted ? 'volume-off' : 'volume-high'}
          size={24}
          color="white"
        />
      </TouchableOpacity>
    </View>
    // <View
    //   style={{
    //     flexDirection: 'row',
    //     height: 10,
    //     flex: 1,
    //     backgroundColor: 'white',
    //   }}>
    //   <View style={{ flex: 1, borderRadius: 10 }}>
    //     <View
    //       style={[
    //         StyleSheet.absoluteFill,
    //         { backgroundColor: 'rgba(0,0,0,0.5)' },
    //       ]}
    //     />
    //     <Animated.View style={{ ...styles.fill, width: 100 }} />
    //   </View>
    // </View>
  );
};

export default VideoControls;

const styles = StyleSheet.create({
  controlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressContainer: {
    width: width * 0.6,
    height: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  fill: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    borderRadius: 10,
    backgroundColor: 'orange',
  },
  controlIcon: {
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 3,
  },
  //   muteIcon: {
  //     borderRadius: 20,
  //     backgroundColor: 'rgba(0,0,0,0.5)',
  //   },
});
