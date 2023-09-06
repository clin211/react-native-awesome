import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import useStyles from '@/assets/styles/pages/carousel';

const swiperData = [
  {
    id: 514,
    type: 'openNewWebPage',
    value: 'https://www.seagm.com/en/mobile-legends',
    image:
      'https://seagm-media.seagmcdn.com/activity/Mlbb20230905_s.jpg?x-oss-process=image/resize,w_750,limit_0/resize,h_750,limit_0/crop,w_750,h_750,g_center',
  },
  {
    id: 512,
    type: 'openDirectTopUpDetails',
    value: '930',
    image:
      'https://seagm-media.seagmcdn.com/activity/pubg20230828_s.jpg?x-oss-process=image/resize,w_750,limit_0/resize,h_750,limit_0/crop,w_750,h_750,g_center',
  },
  {
    id: 510,
    type: 'openNewWebPage',
    value: 'https://www.seagm.com/en/starfield',
    image:
      'https://seagm-media.seagmcdn.com/activity/Starfield20230906_s.jpg?x-oss-process=image/resize,w_750,limit_0/resize,h_750,limit_0/crop,w_750,h_750,g_center',
  },
  {
    id: 500,
    type: 'openNewWebPage',
    value:
      'https://www.seagm.com/en/tower-of-fantasy-global?ps=Search-Results:Related-games',
    image:
      'https://seagm-media.seagmcdn.com/activity/tower20230905_s.jpg?x-oss-process=image/resize,w_750,limit_0/resize,h_750,limit_0/crop,w_750,h_750,g_center',
  },
  {
    id: 498,
    type: 'openNewWebPage',
    value: 'https://www.seagm.com/en/landing/itunes-gift-card',
    image:
      'https://seagm-media.seagmcdn.com/activity/itunes20230828_s.jpg?x-oss-process=image/resize,w_750,limit_0/resize,h_750,limit_0/crop,w_750,h_750,g_center',
  },
];

const Swiper = () => {
  const styles = useStyles();

  const handleOnPressBannerItem = (item: (typeof swiperData)[0]) => {
    console.log(item);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Carousel</Text>
      <View style={styles['carousel-container']}>
        <View style={styles['carousel-box']}>
          <Carousel
            loop
            width={styles.carousel.width}
            height={styles.carousel.height}
            autoPlay={true}
            data={swiperData}
            scrollAnimationDuration={1000}
            onSnapToItem={index => console.log('current index:', index)}
            renderItem={({item}) => (
              <Pressable
                style={styles.pressable}
                onPress={() => handleOnPressBannerItem(item)}>
                <Image
                  source={{uri: item.image}}
                  style={styles['carousel-image']}
                  resizeMethod="resize"
                  resizeMode="contain"
                />
              </Pressable>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Swiper;
