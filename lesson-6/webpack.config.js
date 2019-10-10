const path = require('path')
const output = path.resolve(__dirname, 'target')

module.exports = {
    entry: {
        // входная точка
        index: require.resolve('./src/index.js')
    },
    output: {
        // Выходная точка
        path: output,
        // Имя основного результирующего файла
        filename: 'index.js'
    },
    module: {
        // Правила, тут объявляются лоадеры
        rules: [
            // js-файлы
            {
                test: /\.js$/,
                exclude: /node_modules[\\/].*/,
                // Лоадер трансалинга кода
                use: require.resolve('babel-loader')
            }
        ]
    }
}