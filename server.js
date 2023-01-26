import path from 'path';
import fs from 'fs';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { Provider } from 'react-redux';
import App from './src/App';
import { store } from './src/app/store';
import { StaticRouter } from "react-router-dom/server";

const PORT = process.env.PORT || 3006;
const app = express();

app.get( /\.(js|css|map|ico|json|png|jpg|jpeg)$/, express.static(path.resolve(__dirname, '../build' ) ) );

app.get('*', (req, res) => {
  const context = {};
  const app = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
          <App />
      </StaticRouter>
    </Provider>
  );
  
  const indexFile = path.resolve(__dirname, '../build/index.html');

  let indexHTML = fs.readFileSync( indexFile, {
    encoding: 'utf8',
  });

  res.contentType( 'text/html' );
  res.status( 200 );

  return res.send(
    indexHTML.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
  );
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});