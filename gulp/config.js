

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
            mainForPC: `${originSourceDir}/js/mainForPC.js`,
            mainForSP: `${originSourceDir}/js/mainForSP.js`
        },
        output: {
            path: __dirname,
            filename: "[name].js"
        },
		externals: {
			"jquery": "$"
		},
		resolve: {
			//requireするときに拡張子を省くことができるようになる。
			extensions: ['','.js', '.jsx']
		},
		module: {
			loaders: [
				{ test: /\.js$/, exclude: /node_modules/, loaders: ['babel', 'eslint-loader']},
				{ test: /\.jsx$/, exclude: /node_modules/, loaders: ['babel', 'eslint-loader']}
			]
		},
		eslint:{
			configFile: './.eslintrc'
		}
    }
};
