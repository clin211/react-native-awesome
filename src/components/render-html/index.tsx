import React, { PureComponent } from 'react';
import { Linking, Text, TextStyle, View, ViewStyle } from 'react-native';
import { parseDocument, ElementType } from 'htmlparser2';
import { fonts } from '@/theme';

interface Props {
    html: string;
    textStyle?: TextStyle;
    contentStyle?: ViewStyle;
}

export default class RenderHtml<P extends Props, S> extends PureComponent<P, S> {
    ignoredTags = ['head'];
    textTags = ['span', 'strong', 'em', 'p', 'li'];

    renderTextNode(textNode: any, index: any) {
        return (
            <Text key={index} style={this.props.textStyle ?? {}}>
                {textNode.data}
            </Text>
        );
    }

    renderElement(element: any, index: any) {
        if (this.ignoredTags.indexOf(element.name) > -1) {
            return null;
        }
        const isText = this.textTags.indexOf(element.name) > -1;
        const Wrapper = isText ? Text : View;
        return (
            // @ts-ignore
            <Wrapper style={!isText ? this.props.contentStyle : {}} key={index}>
                {element.children.map((c: any, i: any) => this.renderNode(c, i))}
            </Wrapper>
        );
    }

    renderNode(node: any, index: any) {
        switch (node.type) {
            case ElementType.Text:
                return this.renderTextNode(node, index);
            case ElementType.Tag:
                return this.renderElement(node, index);
        }
        return null;
    }

    render() {
        const document = parseDocument(this.props.html);
        return document.children.map((c, i) => this.renderNode(c, i));
    }
}
