
const pxtorem = require('postcss-pxtorem')

const px2rem = require('postcss-plugin-px2rem')
const tailwind = require('tailwindcss')
module.exports = {
    plugins: [
        tailwind({}),
        px2rem({
            rootValue: 37.5
        })
        // pxtorem({
        //     rootValue: 3.75, // 设计稿宽度/100，即分成多少份
        //     unitPrecision: 5, // 小数精度
        //     propList: [
        //         "*",
        //     ],
        //     selectorBlackList: [],
        //     replace: true,
        //     mediaQuery: false,
        //     minPixelValue: 0,
        //     exclude: /node_modules/i,
        // })
    ]
}