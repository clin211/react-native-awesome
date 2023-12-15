import React, { FC } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import {
    ModalComponentProp,
    ModalComponentWithOptions,
    ModalProp,
    ModalProps,
} from 'react-native-modalfy';

const { width } = Dimensions.get('screen');
interface Props {
    title?: string;
    content: string;
}
const Info: ModalComponentWithOptions<ModalProps<'info', Props>> = ({ modal }) => {
    console.log('info props:', modal);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>title</Text>
            <Text style={styles.content}>content</Text>
            <Text style={styles['text-button']} onPress={() => modal?.closeModal?.()}>
                Confirm
            </Text>
        </View>
    );
};

Info.modalOptions = {
    containerStyle: {
        pointerEvents: 'none',
        borderWidth: 1,
        backgroundColor: 'red',
    },
};

export default Info;

const styles = StyleSheet.create({
    container: {
        width: Math.min(width, 327),
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 24,
        gap: 16,
    },
    title: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 24,
        color: 'rgba(0, 0, 0, 0.8)',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    content: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '600',
        color: 'rgba(0, 0, 0, 0.6)',
    },
    'text-button': {
        width: '100%',
        height: 44,
        borderRadius: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#ff4500',
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '800',
        color: '#fff',
        textTransform: 'uppercase',
    },
});
