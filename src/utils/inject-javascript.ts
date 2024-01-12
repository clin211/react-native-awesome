const injectScript = `
// 删除 dom
function removeDOM(){
    document.querySelector('.navbar').remove();
    document.querySelector('.dydXqf').style.paddingTop=0;
    document.querySelector('.top-container').remove();
    document.querySelector('.writing-title').remove();
    document.querySelector('.bottom-container').remove();
    document.querySelector('.dwbTTH').remove();
};

function updateSize(){
    const body = document.body;
    const html = document.documentElement;

    const height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
    );
    console.log('height:', height)

    window.ReactNativeWebView.postMessage(JSON.stringify({ width: '100%', height, type: 'size' }));
}

removeDOM();
updateSize();
`;

export default injectScript;
