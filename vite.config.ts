import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
import path from "path"
// import { UserConfigExport, ConfigEnv } from "vite"

import { viteMockServe } from "vite-plugin-mock"
// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached，svgt图标放在这个文件夹下面
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        // Specify symbolId format
        symbolId: "icon-[dir]-[name]",
      }),
      viteMockServe({
        // 保证开始阶段可以使用mock接口
        localEnabled: command === "serve",
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src"), // 相对路径别名配置，使用 @ 代替 src
      },
    },
    // scss全局变量的配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
    server: {
      proxy: {
        "/class": "https://m-campus.seewo.com",
      },
    },
  }
})
