import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MarkdownNative, { MarkdownIt, RenderRules } from 'react-native-markdown-display';
import MarkdownItHighlight from 'markdown-it-highlightjs';
const hljs = require('highlight.js/lib/core');

hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));

interface Props {
    content: string;
}

const markdownItInstance = MarkdownIt().use(MarkdownItHighlight, { hljs });

const rules: RenderRules = {
    heading1: node => <Text style={styles.heading1}>{node.content}</Text>,
    heading2: node => <Text style={styles.heading2}>{node.content}</Text>,
    heading3: node => <Text style={styles.heading3}>{node.content}</Text>,
    link: node => <Text style={styles.link}>{node.content}</Text>,
    code_block: (node, children) => (
        <View>
            <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>code</Text>
            <Text style={styles.code}>{node.content}</Text>
        </View>
    ),
    code_inline: (node, children, parent, styles, inheritedStyles = {}) => (
        <Text key={node.key} style={[inheritedStyles, styles.code_inline]}>
            {node.content}
        </Text>
    ),
    text: (node, children) => <Text style={styles.text}>{node.content}</Text>,
};
const Markdown: FC<Props> = ({ content }) => {
    return (
        <View>
            <MarkdownNative rules={rules} markdownit={markdownItInstance}>
                {content}
            </MarkdownNative>
        </View>
    );
};

const styles = StyleSheet.create({
    heading1: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.8)',
    },
    heading2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.8)',
    },
    heading3: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.8)',
    },
    link: {
        color: '#ff4500',
    },
    code: {
        backgroundColor: '#282c34',
        padding: 12,
        color: 'red',
        borderRadius: 12,
    },
    code_inline: {
        backgroundColor: '#282c34',
        padding: 4,
        color: 'blue',
        borderRadius: 4,
    },
    text: {
        color: 'rgba(0, 0, 0, 0.8)',
    },
});

export default Markdown;
