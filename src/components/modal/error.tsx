import React from 'react';
import { Button, Text, View } from 'react-native';
import { ModalComponentWithOptions, ModalProp, ModalProps } from 'react-native-modalfy';

type Props = ModalProps<'error'>;
const ErrorModal: ModalComponentWithOptions<ModalProps<'error'>> = ({ modal }) => {
    console.log('props:', modal);
    return (
        <View>
            <Text>error modal</Text>
            <Text onPress={() => modal.closeModal()}>close</Text>
        </View>
    );
};

ErrorModal.modalOptions = {
    backdropColor: 'red',
    backdropOpacity: 1,
    pointerEventsBehavior: 'none',
};

export default ErrorModal;
