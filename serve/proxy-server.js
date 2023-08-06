// proxy-server.js
import express from "express"
import axios from "axios"
import cors from "cors" // 引入 cors 模块
const app = express()
const port = 3000 // 可以根据需要修改端口号

// 使用 cors 中间件来添加 CORS 头部
app.use(cors())
// 定义代理路由
app.get("/proxy", async (req, res) => {
  try {
    let imageUrl = req.query.url
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" })
    const imageBuffer = Buffer.from(response.data, "binary")
    res.set("Content-Type", "image/png") // 可根据需要设置图片格式
    res.send(imageBuffer)
  } catch (error) {
    console.error(error)
    res.status(500).send("Error fetching image")
  }
})

// 启动代理服务器
app.listen(port, () => {
  console.log(`Proxy server is running on http://localhost:${port}`)
})
