import { FlatList, StyleSheet, Text, View, ViewToken } from 'react-native';
import React, { useState } from 'react';
import PostContent from './PostContent';

interface Props {
  listData: any[];
}

const PostList: React.FC<Props> = ({ listData }) => {
  const [currentVisibleIndex, setCurrentVisibleIndex] = useState(0);
  const [muteAll, setMuteAll] = useState<boolean>(true);

  const viewabilityConfig = {
    waitForInteraction: true,
    viewAreaCoveragePercentThreshold: 15,
  };

  const onViewableItemsChanged = React.useRef((item: any) => {
    setCurrentVisibleIndex(item.viewableItems[0].index);
    // if (item.viewableItems && item.viewableItems.length > 0) {
    //   let seletedVideo = false;
    //   item.viewableItems.forEach((e: any, index: number) => {
    //     const isVideo =
    //       (e.item.type === 'image/video' &&
    //         Array.isArray(e.item.media) &&
    //         e.item.media.some(
    //           (content: any) => content !== null && content.type === 'video',
    //         )) ||
    //       false;
    //     if (isVideo && !seletedVideo) {
    //       seletedVideo = true;
    //       setCurrentVisibleIndex(item.viewableItems[index].index);
    //     }
    //   });

    //   if (!seletedVideo) {
    //     setCurrentVisibleIndex(item.viewableItems[0].index);
    //   }

    //   // if(item.viewableItems.length < 3) {
    //   //   setCurrentVisibleIndex(item.viewableItems[0].index)
    //   // } else if (item.viewableItems.length = 3) {
    //   //   setCurrentVisibleIndex(item.viewableItems[1].index)
    //   // }
    //   // if (item.viewableItems[0].index - collapseIndex < -1) {
    //   //   setCollapsed(false)
    //   //   collapseIndex = item.viewableItems[0].index
    //   // } else if (item.viewableItems[0].index - collapseIndex > 0) {
    //   //   setCollapsed(true)
    //   //   collapseIndex = item.viewableItems[0].index
    //   // }
    //   // if (item.viewableItems[0].index == 0) {
    //   //   setCollapsed(false)
    //   //   collapseIndex = item.viewableItems[0].index
    //   // }
    // }
  });

  const renderItem = ({ item, index }: any) => (
    <PostContent
      postData={item}
      muteAll={muteAll}
      setMuteAll={setMuteAll}
      isPaused={currentVisibleIndex !== index}
    />
  );

  return (
    <View>
      <FlatList
        data={listData}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
        renderItem={renderItem}
      />
      {/* <Text>PostList</Text> */}
    </View>
  );
};

export default PostList;
