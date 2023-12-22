import React, { useEffect, useRef, useState } from 'react';
import {
    Animated,
    FlatList,
    NativeScrollEvent,
    NativeSyntheticEvent,
    PixelRatio,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { useLayout } from '@react-native-community/hooks';
import { fonts } from '@/theme';
import { useDebounce, useDebouncedCallback } from 'use-debounce';

const tabs = ['detail', 'description', 'instruction', 'reviews', 'recommendation'];
type DataObject = { [key: string]: { x: number; y: number; width: number; height: number } };
const VerticalScrollable = () => {
    const containerRef = useRef<ScrollView>(null);
    const { onLayout: detailOnLayout, ...detailRest } = useLayout();
    const { onLayout: descriptionOnLayout, ...descriptionRest } = useLayout();
    const { onLayout: instructionOnLayout, ...instructionRest } = useLayout();
    const { onLayout: reviewsOnLayout, ...reviewsRest } = useLayout();
    const { onLayout: recommendationOnLayout, ...recommendationRest } = useLayout();
    const data: DataObject = {
        detail: {
            x: PixelRatio.roundToNearestPixel(detailRest.x),
            y: PixelRatio.roundToNearestPixel(detailRest.y),
            width: PixelRatio.roundToNearestPixel(detailRest.width),
            height: PixelRatio.roundToNearestPixel(detailRest.height),
        },
        description: {
            x: PixelRatio.roundToNearestPixel(descriptionRest.x),
            y: PixelRatio.roundToNearestPixel(descriptionRest.y),
            width: PixelRatio.roundToNearestPixel(descriptionRest.width),
            height: PixelRatio.roundToNearestPixel(descriptionRest.height),
        },
        instruction: {
            x: PixelRatio.roundToNearestPixel(instructionRest.x),
            y: PixelRatio.roundToNearestPixel(instructionRest.y),
            width: PixelRatio.roundToNearestPixel(instructionRest.width),
            height: PixelRatio.roundToNearestPixel(instructionRest.height),
        },
        reviews: {
            x: PixelRatio.roundToNearestPixel(reviewsRest.x),
            y: PixelRatio.roundToNearestPixel(reviewsRest.y),
            width: PixelRatio.roundToNearestPixel(reviewsRest.width),
            height: PixelRatio.roundToNearestPixel(reviewsRest.height),
        },
        recommendation: {
            x: PixelRatio.roundToNearestPixel(recommendationRest.x),
            y: PixelRatio.roundToNearestPixel(recommendationRest.y),
            width: PixelRatio.roundToNearestPixel(recommendationRest.width),
            height: PixelRatio.roundToNearestPixel(recommendationRest.height),
        },
    };

    const [active, setActive] = useState(-1);
    const handleSetActive = useDebouncedCallback(value => setActive(value), 0);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { y } = event.nativeEvent.contentOffset;
        tabs.map((item, index) => {
            if (data[item].y - 8 <= y) handleSetActive(index);
        });
    };

    const [scale, setScale] = useState(1);
    const animatedValue = useRef(new Animated.Value(1)).current;

    const startAnimation = (targetScale: number) => {
        Animated.timing(animatedValue, {
            toValue: targetScale,
            duration: 500,
            useNativeDriver: false,
        }).start();
        setScale(targetScale);
    };

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                horizontal
                data={tabs}
                scrollsToTop={false}
                style={styles.header}
                overScrollMode="never"
                accessibilityRole="tablist"
                alwaysBounceHorizontal={false}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                automaticallyAdjustContentInsets={false}
                renderItem={({ item, index }) => {
                    const isActive = active === index;
                    return (
                        <Pressable style={styles['header-item']}>
                            <Animated.Text
                                style={[
                                    styles['header-item-text'],
                                    { transform: [{ scale: animatedValue }] },
                                    isActive && { color: '#ff4500' },
                                ]}
                                onPress={() =>
                                    containerRef.current?.scrollTo({
                                        x: 0,
                                        y: data[item].y - 8,
                                        animated: true,
                                    })
                                }
                            >
                                {item}
                            </Animated.Text>
                        </Pressable>
                    );
                }}
                keyExtractor={(_, index) => index.toString()}
            />
            <ScrollView
                ref={containerRef}
                style={{ flex: 1 }}
                onScroll={handleScroll}
                contentContainerStyle={styles.content}
            >
                <View
                    onLayout={detailOnLayout}
                    style={{ height: 300, borderRadius: 12, backgroundColor: 'red' }}
                >
                    <Text>detail</Text>
                </View>
                <View
                    onLayout={descriptionOnLayout}
                    style={{ height: 600, borderRadius: 12, backgroundColor: 'blue' }}
                >
                    <Text>description</Text>
                </View>
                <View
                    onLayout={instructionOnLayout}
                    style={{ height: 400, borderRadius: 12, backgroundColor: 'green' }}
                >
                    <Text>instruction</Text>
                </View>
                <View
                    onLayout={reviewsOnLayout}
                    style={{ height: 500, borderRadius: 12, backgroundColor: 'yellow' }}
                >
                    <Text>reviews</Text>
                </View>
                <View
                    onLayout={recommendationOnLayout}
                    style={{ height: 500, borderRadius: 12, backgroundColor: '#fff' }}
                >
                    <Text>recommendation</Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default VerticalScrollable;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: 44,
        backgroundColor: '#fff',
        flexGrow: 0,
    },
    'header-item': {
        height: '100%',
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    'header-item-text': {
        fontSize: 14,
        lineHeight: 18,
        fontFamily: fonts.Manrope.SemiBold,
        color: 'rgba(0, 0, 0, 0.8)',
    },
    content: {
        rowGap: 8,
        backgroundColor: '#f7f7f7',
    },
});
