import React from 'react';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import useSWR from 'swr';
import { animals } from '@/api/animal';
import Loading from '@/components/loading';
import { DataProvider, LayoutProvider, RecyclerListView } from 'recyclerlistview';

const Animal = () => {
    const { width } = useWindowDimensions();
    const { data, error, isLoading, isValidating, mutate } = useSWR('/animals', animals);
    console.log(
        '🚀 ~ file: Animal.tsx:8 ~ Animal ~ animalData:',
        JSON.stringify(data, null, 2),
        error,
        isLoading,
        isValidating,
        mutate,
    );
    const dataProvider = new DataProvider((r1, r2) => {
        return r1 !== r2;
    });

    return (
        <View style={{ flex: 1 }}>
            {error && <Text>error... -- {error}</Text>}
            {isValidating && <Text>validating...</Text>}
            <RecyclerListView
                style={{ flex: 1 }}
                dataProvider={dataProvider.cloneWithRows(data.items)}
                layoutProvider={
                    new LayoutProvider(
                        () => 1,
                        (_, dim) => {
                            dim.height = 136;
                            dim.width = width;
                        },
                    )
                }
                rowRenderer={(_, data: any) => {
                    console.log('data:', data);
                    return (
                        <View style={{ width: '50%', marginVertical: 20 }}>
                            <Image
                                source={{ uri: 'https://loremflickr.com/640/480/animals' }}
                                style={{
                                    width: 160,
                                    height: 120,
                                    borderWidth: 1,
                                    borderColor: 'red',
                                    borderRadius: 12,
                                }}
                            />
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Text style={{ color: 'red' }}>{data.name}</Text>
                                <Text style={{ color: 'red' }}>{data.liked}</Text>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
};

export default Animal;
