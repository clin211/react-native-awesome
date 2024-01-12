import Markdown from '@/components/markdown';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
const copy = `
# h1 Heading 8-)
## h2 Heading 8-)
### h3 Heading 8-)

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

# Hello this is a title

This is some text with **BOLD!**

[This is a link!](https://github.com/iamacup/react-native-markdown-display/)
[link text](https://www.google.com)
[link with title](https://www.google.com "title text!")
Autoconverted link https://www.google.com (enable linkify to see)

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


Inline \`any\`

Indented code
// Some comments
line 1 of code
line 2 of code
line 3 of code
Block code "fences"

\`\`\`js
Sample text here...
\`\`\`

Syntax highlighting

\`\`\`js
var foo = function (bar) {
return bar++;
};

console.log(foo(5));
\`\`\`

Unordered

+ Create a list by starting a line with \`+\`, \ -\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
- Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet. This is a very long list item that will surely wrap onto the next line.
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit. This is a very long list item that will surely wrap onto the next line.
3. Integer molestie lorem at massa

Start numbering with offset:

57. foo
58. bar

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax
![Alt text][id]
With a reference later in the document defining the URL location:
[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


Enable typographer option to see result.
(c) (C) (r) (R) (tm) (TM) (p) (P) +-
test.. test... test..... test?..... test!....
!!!!!! ???? ,,  -- ---
"Smartypants, double quotes" and 'single quotes'
`;

const Article = () => {
    const [content, setContent] = useState('');
    const fetchData = async () => {
        const result = await fetch(
            'https://github.com/facebook/docusaurus/blob/main/packages/create-docusaurus/README.md',
        );
        console.log('result:', result);
        const text = await result.text();
        setContent(text);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ height: '100%' }}>
            <Markdown content={copy} />
        </ScrollView>
    );
};

export default Article;
