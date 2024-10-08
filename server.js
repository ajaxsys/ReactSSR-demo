import express from 'express';
import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './src/App';
import { fetchMockData } from './mockData'; // 导入 mock 数据函数

const app = express();

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('*', async (req, res) => {
  const mockData = await fetchMockData(); // 使用 mock 数据函数

  const context = {};
  const appHtml = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App serverData={mockData} />
    </StaticRouter>
  );

  // const indexFile = path.resolve(__dirname, 'dist', 'index.html');
  // fs.readFile(indexFile, 'utf8', (err, data) => {
  //   if (err) {
  //     console.error('Error reading index.html', err);
  //     return res.status(500).send('Some error happened');
  //   }

  //   return res.send(
  //     data.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  //   );
  // });
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/styles.css"> <!-- 引入样式表 -->
        <title>React SSR</title>
    </head>
    <body>
        <div id="root">${appHtml}</div>
        <script>
          window.__INITIAL_DATA__ = ${JSON.stringify(mockData)};
        </script>
        <script src="/bundle.js"></script>
    </body>
    </html>
  `;
  res.send(html);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
