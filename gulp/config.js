

const originSourceDir = './public/src';
const originBuildDir = './public/build';

module.exports = {
    srcDir: originSourceDir,
    bldDir: originBuildDir,

    js: {
        srcDir: `${originSourceDir}/js`,
        bldDir: `${originBuildDir}/js`,
        uglify: false
    },
    webpack: {
        entry: {
            bundle: `${originSourceDir}/js/mainForSP.js`,
            test: `${originSourceDir}/js/test.js`
        },
        output: {
            path: __dirname,
            filename: "[name].js"
        }
    },
    externals: {
        "createjs": "createjs",
        "TweenLite": "TweenLite",
        "socket": "io"
    },
    resolve: {
        //requireするときに拡張子を省くことができるようになる。
        extensions: ['','.js']
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel', 'eslint-loader'] }
        ]
    },
    eslint:{
        configFile: './.eslintrc'
    }
};
