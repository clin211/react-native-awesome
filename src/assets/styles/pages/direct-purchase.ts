import {StyleSheet} from 'react-native';
import useMakeStyle from '../../../hooks/useMakeStyle';

const useStyles = () => {
  const {theme} = useMakeStyle();
  return StyleSheet.create({
    container: {
      position: 'relative',
      flex: 1,
      backgroundColor: theme.colors.transparent,
    },
    'header-btn': {
      width: 48,
      height: 48,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.transparent,
      overflow: 'hidden',
      borderRadius: 50,
    },
    linear: {
      width: 375 * theme.scaleRatio.width,
      borderBottomStartRadius: 8,
      borderBottomEndRadius: 8,
      overflow: 'hidden',
    },
    'image-background': {
      width: 375 * theme.scaleRatio.width,
      paddingHorizontal: 24,
    },
    'header-cover': {
      borderRadius: 16,
      overflow: 'hidden',
    },
    'direct-header-cover': {
      width: 90,
      height: 90,
    },
    image: {
      width: 90,
      height: 120,
      marginEnd: 16,
    },
    'card-placeholder-style': {
      backgroundColor: theme.colors.transparent,
      alignItems: 'flex-end',
      width: 90,
      height: 120,
      marginEnd: 16,
    },
    'right-box': {
      width: 221 * theme.scaleRatio.width,
    },
    title: {
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 24,
      //   fontFamily: fontFamily.Bold,
      textTransform: 'uppercase',
    },
    instant: {
      width: 20,
      height: 15,
      marginEnd: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
    area: {
      fontSize: 10,
      lineHeight: 15,
      fontWeight: '600',
      //   fontFamily: fontFamily.Medium,
      marginStart: 4,
    },
    'margin-start-6': {
      marginStart: 6,
    },
    'margin-top': {
      marginTop: 8,
    },
    'margin-start': {
      marginStart: 8,
    },
    'margin-top-10': {
      marginTop: 10,
    },
    'margin-top-16': {
      marginTop: 16,
    },
    'margin-top-24': {
      marginTop: 24,
    },
    'margin-top-18': {
      marginTop: 18,
    },
    row: {
      flexDirection: 'row',
    },
    description: {
      fontWeight: '600',
      fontSize: 10,
      lineHeight: 15,
      //   fontFamily: fontFamily.Bold,
    },

    'input-box': {
      marginTop: 0,
      backgroundColor: theme.colors.card,
      borderRadius: 16,
      height: 300,
    },

    'common-title-box': {
      width: '100%',
      height: 64,
      paddingHorizontal: 24,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative',
    },
    'common-title-text': {
      textTransform: 'uppercase',
      fontSize: 12,
      lineHeight: 16,
      fontWeight: '600',
      //   fontFamily: fontFamily.ExtraBold,
      color: theme.colors.headline,
    },
    'common-title-number-box': {
      backgroundColor: theme.colors.primary,
      width: 24,
      height: 24,
      borderTopStartRadius: 8,
      borderTopEndRadius: 8,
      borderBottomEndRadius: 8,
      borderBottomStartRadius: 0,
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
    },
    'common-title-number-text': {
      fontSize: 14,
      lineHeight: 18,
      padding: 0,
      //   fontFamily: fontFamily.ExtraBold,
      color: theme.colors.white,
    },
    'common-title-line': {
      position: 'absolute',
      height: 1,
      width: '100%',
      bottom: 0,
      marginStart: 24,
      backgroundColor: theme.colors.border,
    },
    box: {
      marginTop: 8,
      borderRadius: 16,
      backgroundColor: theme.colors.card,
    },
    'sku-box': {
      width: '100%',
      paddingVertical: 16,
      paddingHorizontal: 24,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    'sku-detail': {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    'sku-image': {
      width: 48,
      height: 48,
      borderRadius: 8,
    },
    'sku-title': {
      flex: 1,
      marginStart: 8,
      fontSize: 12,
      lineHeight: 16,
      //   fontFamily: fontFamily.Bold,
      color: theme.colors.headline,
    },

    'payment-box': {
      width: '100%',
      paddingVertical: 18,
      paddingHorizontal: 24,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    'payment-cover-image': {
      height: 24,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    'payment-price-box': {
      flexDirection: 'row',
      alignItems: 'center',
    },
    'payment-price-text': {
      fontSize: 12,
      lineHeight: 16,
      textAlign: 'right',
      //   fontFamily: fontFamily.ExtraBold,
      color: theme.colors.primary,
    },
    'detail-box': {
      padding: 24,
      marginTop: 8,
      borderRadius: 16,
      backgroundColor: theme.colors.card,
    },
    'total-box': {
      marginBottom: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    'total-title': {
      fontSize: 16,
      lineHeight: 18,
      color: theme.colors.headline,
      //   fontFamily: fontFamily.Bold,
    },
    'total-price': {
      fontSize: 16,
      lineHeight: 18,
      color: theme.colors.primary,
      //   fontFamily: fontFamily.ExtraBold,
    },
    'cell-row': {
      marginTop: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    'cell-left': {
      fontSize: 12,
      lineHeight: 14,
      fontWeight: '600',
      //   fontFamily: fontFamily.SemiBold,
      color: theme.colors.headline,
    },
    'cell-right': {
      fontSize: 12,
      lineHeight: 16,
      color: theme.colors.headline,
      //   fontFamily: fontFamily.SemiBold,
      fontWeight: '600',
    },
    'cell-icon-start': {
      marginEnd: 4,
    },
    'seagm-credits': {
      //   fontFamily: fontFamily.ExtraBold,
    },
    'star-color': {
      color: '#CE9F53',
      //   fontFamily: fontFamily.Bold,
    },

    'description-container': {
      width: '100%',
      backgroundColor: 'white',
      borderRadius: 16,
      marginTop: 8,
      overflow: 'hidden',
    },

    'reviews-container': {
      padding: 24,
      marginTop: 8,
      borderRadius: 16,
      backgroundColor: theme.colors.headline,
    },
    'reviews-header': {
      height: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    'reviews-header-title': {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: '600',
      //   fontFamily: fontFamily.ExtraBold,
      color: theme.colors.headline,
      textTransform: 'capitalize',
    },
    'reviews-header-count': {
      fontSize: 16,
      lineHeight: 17,
      fontWeight: '600',
      //   fontFamily: fontFamily.Bold,
      textAlign: 'center',
      color: theme.colors.headline,
    },
    'reviews-header-text': {
      fontSize: 10,
      lineHeight: 12,
      fontWeight: '600',
      //   fontFamily: fontFamily.SemiBold,
      color: 'rgba(0, 0, 0, 0.3)',
    },
    'reviews-header-line': {
      height: 24,
      backgroundColor: '#D9D9D9',
      width: 1,
      marginHorizontal: 16,
    },
    'reviews-more': {
      marginTop: 24,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      height: 24,
    },
    'reviews-button': {
      alignItems: 'center',
      padding: 0,
      paddingHorizontal: 0,
      backgroundColor: theme.colors.transparent,
    },
    'reviews-more-text': {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: '600',
      color: 'rgba(0, 0, 0, 0.5)',
      //   fontFamily: fontFamily.Bold,
    },

    'list-box': {
      paddingVertical: 24,
      marginTop: 8,
      borderRadius: 16,
      backgroundColor: theme.colors.headline,
    },
    'list-title': {
      fontSize: 12,
      lineHeight: 14,
      fontWeight: '600',
      paddingHorizontal: 24,
      //   fontFamily: fontFamily.ExtraBold,
      color: theme.colors.headline,
      textTransform: 'capitalize',
    },
    list: {
      marginTop: 24,
      paddingHorizontal: 24,
    },
    'list-item': {
      marginEnd: 12,
    },
    'list-item-cover': {
      width: 102,
      height: 102,
      borderRadius: 12,
      overflow: 'hidden',
    },
    'list-item-text': {
      marginTop: 8,
      maxWidth: 102,
      fontSize: 10,
      lineHeight: 16,
      fontWeight: '600',
      //   fontFamily: fontFamily.SemiBold,
    },

    btn: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 24,
      paddingTop: 20,
      //   paddingBottom: shared.settings.safeAreaInsets.bottom,
    },
    'btn-text': {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: '600',
      textAlign: 'center',
      color: theme.colors.headline,
      textTransform: 'uppercase',
      //   fontFamily: fontFamily.ExtraBold,
    },
    'direct-top-up': {
      flex: 1,
      height: 44,
      width: theme.screen.width - 48,
      borderRadius: 22,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};

export default useStyles;
