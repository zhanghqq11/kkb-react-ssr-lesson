const path = require('path');
const nodeExternals = require('webpack-node-externals')

module.exports = {
    target:"node",
    mode:"development",
    entry:'./server/index.js',
    externals:[nodeExternals()],
    output:{
        file:'bundle.js',
        path:path.resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                // babel 支持jsx
                loader:'babel-loader',
                exclude:/node_modeles/,
                options:{
                    presets:['@babel/preset-react',['@babel/preset-env']]
                }
            }
        ]
    }
}