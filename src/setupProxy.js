const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
	app.use(
		createProxyMiddleware('/api', {
			target: 'http://141.164.35.18:8080', 
			changeOrigin: true,
		})
	);
};