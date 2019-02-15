export default function renderFullPage(html, preloadedState) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
        <script src="/bundle.js" defer></script>
        <script>window.__INITIAL_DATA__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}</script>    
    </head>
    <body>
        <div id="app">${html}</div>
    </body>
    </html>
    `;
}