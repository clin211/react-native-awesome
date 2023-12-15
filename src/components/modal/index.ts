import { ModalOptions, ModalStackConfig, createModalStack } from 'react-native-modalfy';
import Error from './error';
import Success from './success';
import Info from './info';

const modalConfig: ModalStackConfig = {
    Error,
    Success,
    Info,
    error: Error,
    success: Success,
    info: Info,
};
const defaultOptions: ModalOptions = { backdropOpacity: 0.6 };
export const stack = createModalStack(modalConfig, defaultOptions);

export default {
    Error,
    Success,
    Info,
};
