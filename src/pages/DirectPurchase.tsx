import {
  View,
  Text,
  ScrollView,
  useWindowDimensions,
  Platform,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import useStyles from '../assets/styles/pages/direct-purchase';
import useBoolean from '../hooks/useBoolean';
import {ArrowRight} from '../components/Icons';

const DirectPurchase = () => {
  const styles = useStyles();
  return (
    <ScrollView>
      <View style={styles['input-box']}>
        <CommonTitle title={'Order Information'} number={1} />
      </View>

      <View style={styles.box}>
        <CommonTitle title={'select top up amount'} number={2} />
        <Pressable style={styles['sku-box']} onPress={() => {}}>
          <View style={styles['sku-detail']}>
            <Image
              style={{width: 48, height: 48, borderRadius: 8}}
              source={{
                uri: 'https://seagm-media.seagmcdn.com/icon_400/639.jpg?x-oss-process=image/resize,w_96',
              }}
            />
            <Text style={styles['sku-title']} numberOfLines={2}>
              422+60 Extra Unknown Cash 422+60 Extra Unknown Cash
            </Text>
          </View>
          <View style={styles['margin-start']}>
            {/* <SvgUri uri={require('../assets/icons/chevron-right.svg')} /> */}
            <ArrowRight />
          </View>
        </Pressable>
      </View>

      <View style={styles.box}>
        <CommonTitle title={'select payment channel'} number={3} />
        <Pressable style={styles['payment-box']}>
          <PaymentImage
            uri={'https://seagm-media.seagmcdn.com/bank/seagm-gift-card.png'}
          />
          <View style={styles['payment-price-box']}>
            <Text style={styles['payment-price-text']}>RM 43.80</Text>
            <ArrowRight />
            {/* <Svg name="more" width="24" height="24" /> */}
          </View>
        </Pressable>
      </View>

      <View style={styles['detail-box']}>
        <View style={styles['total-box']}>
          <Text style={styles['total-title']}>{'Total'}</Text>
          <Text style={styles['total-price']}>RM 43.80</Text>
        </View>
        <View style={styles['cell-row']}>
          <Text style={styles['cell-left']}>{'SEAGM Credits'}</Text>
          <View style={styles.row}>
            <Text
              style={[
                styles['cell-right'],
                styles['cell-icon-start'],
                styles['seagm-credits'],
              ]}>
              2,850
            </Text>
            {/* <Svg name="seagm-coin" width="16" height="16" /> */}
            <ArrowRight />
          </View>
        </View>
        <View style={styles['cell-row']}>
          <Text style={styles['cell-left']}>{'Tax Inclusive'}</Text>
          <Text style={[styles['cell-right']]}>5%</Text>
        </View>
        <View style={styles['cell-row']}>
          <Text style={styles['cell-left']}>{'STARs'}</Text>
          <View style={styles.row}>
            <Text
              style={[
                styles['cell-right'],
                styles['cell-icon-start'],
                styles['star-color'],
              ]}>
              1,190
            </Text>
            {/* <Svg name="mine-star-icon" width="16" height="16" /> */}
          </View>
        </View>
        <View style={styles['cell-row']}>
          <Text style={styles['cell-left']}>{'Payment Fees'}</Text>
          <Text style={[styles['cell-right']]}>RM 2,850</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DirectPurchase;

interface CommonProps {
  title: string;
  number: number;
}
const CommonTitle = ({title, number}: CommonProps) => {
  const styles = useStyles();
  return (
    <View style={styles['common-title-box']}>
      <Text style={styles['common-title-text']}>{title}</Text>
      <View style={styles['common-title-number-box']}>
        <Text style={styles['common-title-number-text']}>{number}</Text>
      </View>
      <View style={styles['common-title-line']} />
    </View>
  );
};

const PaymentImage = ({uri}: {uri: string}) => {
  const styles = useStyles();
  const {width} = useWindowDimensions();
  const [loaded, setLoaded] = useBoolean(true);
  console.log(
    '🚀 ~ file: DirectPurchase.tsx:128 ~ PaymentImage ~ loaded:',
    loaded,
  );

  let imageWidth = 104 * (width / 375);
  if (Platform.OS === 'android') {
    Image.prefetch(uri);
  }
  Image.getSize(uri, w => (imageWidth = w));

  return (
    <Image
      source={{uri}}
      resizeMode="contain"
      resizeMethod="scale"
      onError={setLoaded.setFalse}
      onLoad={setLoaded.setTrue}
      style={[{width: imageWidth}, styles['payment-cover-image']]}
    />
  );
};
