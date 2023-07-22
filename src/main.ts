import { createApp } from "vue"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
//@ts-expect-error忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from "element-plus/dist/locale/zh-cn.mjs"
// import zhCn from "element-plus/dist/locale/uk.mjs" 这样子可以切换语言，在分页组件可以查看到效果
import App from "./App.vue"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 查看环境变量
// console.log(import.meta.env)

//svg插件需要配置代码
import "virtual:svg-icons-register"

// 注册单个的全局组件
// import SvgIcon from "@/components/SvgIcon/index.vue"
// app.component("SvgIcon", SvgIcon)

// 插件方式注册所有的全局组件
import globalComponent from "./components/index"
app.use(globalComponent)

// 引入全局样式
import "@/styles/index.scss"

// 使用fetch做一个简单的测试
// fetch("/api/user/login", {
//   method: "POST",
//   body: JSON.stringify({
//     username: "admin",
//     password: "111111",
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))

/** fetch返回的东西
 * 

{
    "code": 200,
    "data": {
        "token": "Admin Token"
    }
}

 */

// 使用axios进行一个简单的测试mock
// import axios from "axios"
// axios
//   .post("/api/user/login", {
//     username: "admin",
//     password: "111111",
//   })
//   .then(function (response) {
//     console.log("使用axios做测试")
//     console.log(response)
//   })
//   .catch(function (error) {
//     console.log(error)
//   })

app.mount("#app")
