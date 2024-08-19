const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const path = require('path');
const App = require('./src/App').default;

const app = express();

// 提供打包后的静态文件
app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('*', (req, res) => {
  const appHtml = ReactDOMServer.renderToString(React.createElement(App));
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React SSR</title>
    </head>
    <body>
        <div id="root">${appHtml}</div>
        <script src="/bundle.js"></script>
    </body>
    </html>
  `;
  res.send(html);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
