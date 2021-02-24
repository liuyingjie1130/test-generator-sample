/*
 * @Author: your name
 * @Date: 2021-02-24 19:35:30
 * @LastEditTime: 2021-02-24 21:18:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \02-01-study-materials\generator-sample\app\index.js
 */
const Generator = require('yeoman-generator')

module.exports = class extends Generator{
    prompting(){
        return this.prompt({
            type:'input',
            name:'name',
            message:'your project name',
            default:this.appname
        })
        .then(answers=>{
            this.answers = this.answers
        })
    }
    writing(){
        // this.fs.write(
        //     this.destinationPath('temp.txt'),
        //     Math.random().toString()
        // )

        const tmpl = this.templatePath('foo.txt')
        const output = this.destinationPath('foo.txt')
        const context = {title:'hello',success:false}
        // const context = this.answers

        this.fs.copyTpl(tmpl,output,context)
    }
}