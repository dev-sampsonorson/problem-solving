const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
    return {
        mode: env.mode,
        entry: {
            // 'new-year-chaos': './src/new-year-chaos.ts',
            'prefix-sum': './src/prefix-sum.ts',
        },
        output: {
            filename: '[name].bundle.js',
        },
        devServer: {
            // inline: true,
            contentBase: './dist',
            publicPath: '/'
        },
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.js$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env'],
                                plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-object-rest-spread']
                            }
                        }
                    ],
                    include: path.join(__dirname, './src'),
                    exclude: /node_modules/
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin()
        ],
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.scss', '.css']
        },
    };
};