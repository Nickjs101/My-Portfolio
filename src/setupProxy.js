import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://api.langflow.astra.datastax.com',
            changeOrigin: true,
        })
    );
};
