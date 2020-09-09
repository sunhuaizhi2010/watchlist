/*
 * @Author: your name
 * @Date: 2020-09-09 16:22:41
 * @LastEditTime: 2020-09-09 16:46:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \packagee:\webpacktest\webpack.config.js
 */
const path=require('path'); //调用node.js中的路径
module.exports={
    mode : "production",
    entry:{
        index:'./test.js' //需要打包的文件
    },
    output:{
        filename: 'test02.js',    //输入的文件名是什么，生成的文件名也是什么
        path: path.join(__dirname, 'dist'), //指定生成的文件目录
    },
   // mode:"development"    //开发模式，没有对js等文件压缩，默认生成的是压缩文件
}