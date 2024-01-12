import { flip, limitShift, offset, shift, useFloating } from '@floating-ui/react-native';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

const Floating = () => {
    const { refs, floatingStyles, scrollProps, x, y } = useFloating({
        sameScrollView: false,
        middleware: [offset(10), shift({ limiter: limitShift() }), flip({ crossAxis: false })],
    });
    console.log('x: y', x, y);
    // console.log('refs', refs.floating.current);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView {...scrollProps}>
                <View ref={refs.setReference} collapsable={false} style={{ marginTop: 30 }}>
                    <Text>Reference</Text>
                </View>
                <View
                    ref={refs.setFloating}
                    collapsable={false}
                    style={[{ backgroundColor: 'red', marginTop: 20 }]}
                >
                    <Text>Floating</Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default Floating;