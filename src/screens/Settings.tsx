import React, { FC, useRef, useState } from 'react';
import { Pressable, ScrollView, Text, View, useColorScheme } from 'react-native';
import styles from '@/assets/styles/settings';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenParams } from '@/navigator/navigator';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import EStyleSheet from 'react-native-extended-stylesheet';
import { dark, light } from '@/theme/color';

type AppearanceType = 'auto' | 'light' | 'dark';
const appearance: { title: string; code: AppearanceType }[] = [
    { title: '跟随系统', code: 'auto' },
    { title: '浅色模式', code: 'light' },
    { title: '深色模式', code: 'dark' },
];

const Settings: FC<NativeStackScreenProps<ScreenParams, 'Settings'>> = ({ navigation }) => {
    const systemColorScheme = useColorScheme();
    const [currentMode, setCurrentMode] = useState<AppearanceType>('auto');
    const checkBox = useRef<BouncyCheckbox>(null);

    const handleChangeCheckbox = (type: AppearanceType) => {
        setCurrentMode(type);
        checkBox.current?.onPress?.();
        let currentMode = systemColorScheme;
        if (type !== 'auto') {
            currentMode = type;
        }
        EStyleSheet.build(type === 'dark' ? dark : light);
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Appearance</Text>
            <View style={styles.box}>
                {appearance.map((item, index) => {
                    return (
                        <Pressable
                            key={item.code}
                            style={styles.item}
                            onPress={() => handleChangeCheckbox(item.code)}
                        >
                            <Text style={styles.label}>{item.title}</Text>
                            <BouncyCheckbox
                                size={20}
                                disableText
                                ref={checkBox}
                                disableBuiltInState
                                fillColor={EStyleSheet.value('$primary')}
                                unfillColor={EStyleSheet.value('$transparent')}
                                isChecked={currentMode === item.code}
                                iconStyle={{ borderColor: EStyleSheet.value('$primary') }}
                                innerIconStyle={{ borderWidth: 2 }}
                            />
                        </Pressable>
                    );
                })}
            </View>
        </ScrollView>
    );
};

export default Settings;
