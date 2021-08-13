import  './x.scss'
import './y.less'
import './z.styl'
import jpg from './assets/1.jpg'

const div = document.getElementById("xxx")
div.innerHTML = `<img src="${jpg}">`

//懒加载
const button = document.createElement('button')
button.innerText ='懒加载'
div.appendChild(button)
button.onclick = ()=>{
   const promise = import('./lazy.js')
   promise.then((module) => {
       const fn = module.default
       fn()
   },() => {
       console.log('模块加载错误')
   })
}