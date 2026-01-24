const path = require('node:path'); //импортировала встроенный модуль path для построения пути к папке вывода, так как почему-то файл dist находился только через абсолютный путь (не очень понимаю почему) Информацию о модуле нашла здесь https://nodejs.org/api/path.html

module.exports = {
  mode: 'development', //режим для разработки
  entry: './index.ts', //точка входа
  output: { //куда компелируется js страничка
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js'] //расширения файликов, для распознавания
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // проверка на расширение .ts
        use: 'ts-loader',
        exclude: /node_modules/ //компилятор
      }
    ]
  }
};