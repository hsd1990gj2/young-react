const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy(
            '/example',
            {
                target: ' https://www.easy-mock.com/mock/5e251cf6bc40327ccfcf4def',
                changeOrigin: true
            }
        )
    );
};
