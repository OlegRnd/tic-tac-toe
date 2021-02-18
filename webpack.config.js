const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')

const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  ]

  return loaders
}

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production'
  const isDev = !isProd

  const filename = (ext) =>
    isDev ? `bundle.${ext}` : `bundle.[contenthash].${ext}`

  const plugins = () => {
    const base = [
      new HtmlWebpackPlugin({
        template: 'index.html',
        // удаление комментов и лишних пробелов в режиме продакшна
        minify: {
          removeComments: isProd,
          collapseWhitespace: isProd,
        },
        hash: true,
      }),
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src/favicon.ico'),
            to: path.resolve(__dirname, 'dist'),
          },
        ],
      }),
      new MiniCssExtractPlugin({
        filename: filename('css'),
      }),
    ]

    if (isDev) {
      base.push(new ESLintWebpackPlugin())
    }

    return base
  }

  return {
    target: 'web', // нужно для правильной работы devServer-а
    // место где лежат все исходники. по умолчанию вебпак смотрит сюда
    context: path.resolve(__dirname, 'src'),
    mode: 'development',

    // входные точки для приложения
    // babel/polyfill нужен для корректной работы async/await
    // мы уже рассматриваем папку src, поэтому путь относительно src
    entry: ['@babel/polyfill', './index.js'],

    // название выходного js файла и пути, куда вебпак сложит продакшн скрипты
    output: {
      // здесь добавляется [hash] чтобы при изменениях файл был каждый раз новым
      // и этим избегаются проблемы кэширования браузером рабочего проекта
      filename: filename('js'),
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@core': path.resolve(__dirname, 'src/core'),
      },
    },
    devtool: isDev ? 'source-map' : false,
    devServer: {
      // hot: isDev,
      watchContentBase: isDev, // будет работать html обновление
      port: 3000,
      open: true,
    },
    plugins: plugins(),
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: jsLoaders(),
        },
      ],
    },
  }
}
