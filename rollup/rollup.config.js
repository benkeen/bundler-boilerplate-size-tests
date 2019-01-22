import uglify from 'rollup-plugin-uglify';

export default {
    plugins: [
        uglify.uglify()
    ],
    input: './src/index.js',
    output: [
        {
            file: './dist/rollup-bundle.js',
            format: 'es',
            sourcemap: false
        }
    ]
};

