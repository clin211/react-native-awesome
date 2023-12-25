import React, { FC } from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { DataProvider, LayoutProvider, RecyclerListView } from 'recyclerlistview';
import { SDItem } from '@/mock/special-deals';
import SpecialDeal from '@/components/special-deals/Item';

interface Props {
    data: SDItem[];
}
const SpecialDealsList: FC<Props> = ({ data }) => {
    const { width } = useWindowDimensions();

    let dataProvider = new DataProvider((r1, r2) => {
        return r1 !== r2;
    });

    return (
        <RecyclerListView
            forceNonDeterministicRendering
            onEndReached={() => console.log('on end reached')}
            layoutProvider={
                new LayoutProvider(
                    () => 1,
                    (_, dim) => {
                        dim.height = 126;
                        dim.width = width;
                    },
                )
            }
            style={styles.container}
            dataProvider={dataProvider.cloneWithRows(data)}
            rowRenderer={(_, data: SDItem) => {
                return <SpecialDeal {...data} />;
            }}
        />
    );
};

export default SpecialDealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
