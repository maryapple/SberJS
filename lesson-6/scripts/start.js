const App = require('express')
const webpackDevMiddleWare = require('webpack-dev-middleware')
const webpack = require('webpack')
const webpackConfig = require('../webpack.config')

const app = App()

const compiler = webpack(webpackConfig)

app
    .use(webpackDevMiddleWare(compiler))
    .listen(4242, null, () => {
        console.log('start dev on server on http://localhost:4242')
    })