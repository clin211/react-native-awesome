import { fonts } from '@/theme';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container: {},
    title: {
        fontSize: 16,
        lineHeight: 24,
        color: '$textColor2',
        fontFamily: fonts.Manrope.Bold,
        paddingHorizontal: 24,
        paddingVertical: 12,
    },
    box: {
        backgroundColor: '$bgl2',
        borderRadius: 12,
        paddingVertical: 12,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingVertical: 12,
    },
    label: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: fonts.AlimamaDongFangDaKai.Regular,
    },
});

export default styles;
