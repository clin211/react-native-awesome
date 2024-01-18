import React from 'react';
import { useWindowDimensions, View, Text } from 'react-native';
import RenderHtml, { TChildrenRenderer } from 'react-native-render-html';

function AdComponent () {
    return (
        <View
            style={{ backgroundColor: 'purple', padding: 10, alignSelf: 'stretch' }}>
            <Text style={{ color: 'white' }}>😈🤑😈🤑😈🤑</Text>
        </View>
    );
}

function ArticleWithAds ({
    TDefaultRenderer,
    tnode,
    ...defaultRendererProps
}) {
    const firstChildrenChunk = tnode.children.slice(0, 2);
    const secondChildrenChunk = tnode.children.slice(2, 4);
    const thirdChildrenChunk = tnode.children.slice(4);
    return (
        <TDefaultRenderer tnode={tnode} {...defaultRendererProps}>
            <TChildrenRenderer tchildren={firstChildrenChunk} />
            {firstChildrenChunk.length === 2 ? <AdComponent /> : null}
            <TChildrenRenderer tchildren={secondChildrenChunk} />
            {secondChildrenChunk.length === 2 ? <AdComponent /> : null}
            <TChildrenRenderer tchildren={thirdChildrenChunk} />
        </TDefaultRenderer>
    );
}

const source = {
    html: `<article>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <p>Paragraph 3</p>
    <p>Paragraph 4</p>
    <p>Paragraph 5</p>
  </article>`
};

const tagsStyles = {
    article: {
        marginHorizontal: 10
    }
};

const renderers = {
    article: ArticleWithAds
};

export default function CustomRender () {
    const { width } = useWindowDimensions();
    return (
        <RenderHtml
            contentWidth={width}
            source={source}
            tagsStyles={tagsStyles}
            renderers={renderers}
        />
    );
}
