import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        paddingTop: global.insets?.top,
        backgroundColor: '$baseBg',
    },
    pressable: {
        marginHorizontal: 24,
        marginVertical: 8,
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '$primary',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        fontStyle: 'italic',
        color: '$primary',
    },
});

export default styles;
