const path = require('path');

module.exports = {
    mode:"development",
    entry:'./client/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'pubilc')
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