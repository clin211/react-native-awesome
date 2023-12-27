import LottieView, { AnimationObject } from 'lottie-react-native';
import React, {
    FC,
    PropsWithChildren,
    createContext,
    isValidElement,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { Animated, BackHandler, Dimensions, StyleSheet, Text, View, ViewStyle } from 'react-native';
import useBoolean from '@/hooks/useBoolean';
import { loading as loadingLotties, IconTypes } from '@/assets/lotties';
import { fonts } from '@/theme';

interface LoadingConfig {
    /** loading icon 目前只支持 lottie 组件和自定义组件 **/
    icon?: AnimationObject | React.ReactNode;
    message?: string | React.ReactNode;
    containerStyle?: ViewStyle;
}

export interface LoadingContextProps {
    show: (data?: LoadingConfig) => void;
    close: () => void;
    closeAll: () => void;
    getState: () => boolean;
}

const LoadingContext = createContext<LoadingContextProps | undefined>(undefined);

export const useLoading = (): LoadingContextProps => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
};

const { width, height } = Dimensions.get('screen');
const LoadingProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, setState] = useBoolean();
    const [data, setData] = useState<LoadingConfig>({ icon: loadingLotties });

    const show = (params: Partial<LoadingConfig | undefined>) => {
        setData(newData => ({ ...newData, ...params }));
        setState.setTrue();
    };
    const close = setState.setFalse;
    const closeAll = setState.setFalse;
    const getState = () => state;

    const icon = useMemo(() => {
        if (data?.icon && isValidElement(data?.icon)) {
            return data?.icon;
        }
        return <LottieView source={loadingLotties} autoPlay loop style={styles.content} />;
    }, []);

    const message = useMemo(() => {
        if (data?.message && typeof data?.message === 'string') {
            return <Text style={styles['loading-text']}>{data?.message}</Text>;
        }
        if (data?.message && isValidElement(data?.message)) {
            return data?.message;
        }
        return null;
    }, [data]);

    useEffect(() => {
        const closeListen = () => {
            close();
            return false;
        };
        BackHandler.addEventListener('hardwareBackPress', closeListen);
        return () => {
            BackHandler.addEventListener('hardwareBackPress', closeListen);
        };
    }, []);

    return (
        <LoadingContext.Provider value={{ show, close, closeAll, getState }}>
            {state && (
                <Animated.View style={[styles.container, data?.containerStyle]}>
                    {icon}
                    {message}
                </Animated.View>
            )}
            {children}
        </LoadingContext.Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        width,
        height,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        ...StyleSheet.absoluteFillObject,
    },
    content: {
        width: 48,
        height: 48,
    },
    'loading-text': {
        fontSize: 16,
        lineHeight: 20,
        fontFamily: fonts.Manrope.Bold,
        color: '#fff',
    },
});

export default LoadingProvider;
