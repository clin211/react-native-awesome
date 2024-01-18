import React, { useState, useEffect, useMemo } from 'react';
import {
    TRenderEngineProvider,
    RenderHTMLConfigProvider,
    RenderHTMLSource,
    useAmbientTRenderEngine
} from 'react-native-render-html';
import { findAll } from 'domutils';

function isImgElement (node) {
    return node.name === 'img';
}

function RenderSource ({ html }) {
    const [isDomReady, setIsDomReady] = useState(false);
    // Let's use the TRE provided from the root of our app
    // via TRenderEngineProvider to build the DOM
    const engine = useAmbientTRenderEngine();
    const dom = useMemo(() => engine.parseDocument(html), [html, engine]);
    // Use effect to inspect the DOM
    useEffect(function inspectDom () {
        // Do any pre-rendering logic here
        const images = findAll(isImgElement, dom, true);
        // Do stuff with images such as preloading
        // ...
        // When preloading is done, set isDomReady to true!
        setIsDomReady(true);
    }, [dom]);
    return isDomReady ?
        <RenderHTMLSource source={{ dom }} />
        : null;
}

const html = `
hello world!
<img src='https://img.io/001.jpg' />
`

export default function PrerenderHtml () {
    return (
        <TRenderEngineProvider>
            <RenderHTMLConfigProvider>
                <RenderSource html={html} />
            </RenderHTMLConfigProvider>
        </TRenderEngineProvider>
    );
}
