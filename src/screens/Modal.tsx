import modal from '@/components/modal';
import React from 'react';
import { FlatList, Pressable, StyleSheet, Text } from 'react-native';
import { useModal } from 'react-native-modalfy';

const modals = [
    {
        title: 'info',
        content: 'information modal',
        props: {
            message: 'No Internet connection',
            title: 'information',
            content: 'information content',
        },
        params: {
            disableFlingGesture: true,
            pointerEventsBehavior: 'none',
        },
    },
    { title: 'error', content: 'error modal' },
    { title: 'success', content: 'success modal' },
];
const Modal = () => {
    const ms = useModal();
    return (
        <FlatList
            data={modals}
            contentContainerStyle={{ gap: 8, paddingHorizontal: 24 }}
            keyExtractor={item => item.title}
            StickyHeaderComponent={() => <Header />}
            ListHeaderComponent={() => <Header />}
            renderItem={({ item }) => {
                return (
                    <Pressable
                        key={item.title}
                        style={styles.button}
                        onPress={() => ms.openModal(item.title, item.props || {})}
                    >
                        <Text>{item.title}</Text>
                        <Text>{item.content}</Text>
                    </Pressable>
                );
            }}
        />
    );
};

const Header = () => {
    return (
        <>
            <Text>Modal Category</Text>
        </>
    );
};

export default Modal;

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'skyblue',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
