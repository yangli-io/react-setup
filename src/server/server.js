import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../Components/App';

const app = express();

app.get('/', (req, res) => {
	const renderedHTML = renderToString(<App />);
	res.send(`<!DOCTYPE HTML><html><head></head><body><div id="root">${renderedHTML}</div><script src="/index.js"></script></body></html>`);
});

app.get('/counter', (req, res) => {
	res.json([1,2,10]);
});

app.use(express.static('dist'));

app.listen(8000, () => {
	console.log('port 8000!');
});