import { fonts } from '@/theme';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container: {
        minHeight: '100%',
        flex: 1,
        backgroundColor: '$baseBg',
    },

    box: {},
    cell: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderWidth: 1,
    },
    start: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        marginStart: 8,
        fontSize: 16,
        lineHeight: 24,
        fontFamily: fonts.Manrope.SemiBold,
    },
});

export default styles;
