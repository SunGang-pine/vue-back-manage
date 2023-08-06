<script setup lang="ts">
// import { testReqLogin } from "@/api/user"
import { reqOneDayPics } from "@/api/ruipics"
import { onMounted } from "vue"
import { ref } from "vue"
const picUrl = ref([])
import { dayjs } from "element-plus"
const today = ref(dayjs(new Date()).format("YYYY-MM-DD"))
console.log(typeof today.value)
onMounted(async () => {
  // const res = await testReqLogin({
  //   username: "admin",
  //   password: "111111",
  // })
  // console.log("res", res)

  const res1 = await reqOneDayPics({
    action: "GET_ATTENDANCE_V1_BYSCHOOLUID_USER_BYUSERUID_DATA",
    params: {
      schoolUid: "d0b56de8e3f54db284d78b4f2c270052",
      userUid: "uzkgihrpknrnxtppqurjvr1829z87571",
      day: "2023-06-24",
    },
  })
  const res2 = await reqOneDayPics({
    action: "GET_ATTENDANCE_V1_BYSCHOOLUID_USER_BYUSERUID_DATA",
    params: {
      schoolUid: "d0b56de8e3f54db284d78b4f2c270052",
      userUid: "uzkgihrpknrnxtppqurjvr1829z87571",
      day: "2023-06-25",
    },
  })
  const res3 = await reqOneDayPics({
    action: "GET_ATTENDANCE_V1_BYSCHOOLUID_USER_BYUSERUID_DATA",
    params: {
      schoolUid: "d0b56de8e3f54db284d78b4f2c270052",
      userUid: "uzkgihrpknrnxtppqurjvr1829z87571",
      day: "2023-06-26",
    },
  })
  const res4 = await reqOneDayPics({
    action: "GET_ATTENDANCE_V1_BYSCHOOLUID_USER_BYUSERUID_DATA",
    params: {
      schoolUid: "d0b56de8e3f54db284d78b4f2c270052",
      userUid: "uzkgihrpknrnxtppqurjvr1829z87571",
      day: "2023-06-27",
    },
  })
  const res5 = await reqOneDayPics({
    action: "GET_ATTENDANCE_V1_BYSCHOOLUID_USER_BYUSERUID_DATA",
    params: {
      schoolUid: "d0b56de8e3f54db284d78b4f2c270052",
      userUid: "uzkgihrpknrnxtppqurjvr1829z87571",
      day: "2023-06-28",
    },
  })
  const res6 = await reqOneDayPics({
    action: "GET_ATTENDANCE_V1_BYSCHOOLUID_USER_BYUSERUID_DATA",
    params: {
      schoolUid: "d0b56de8e3f54db284d78b4f2c270052",
      userUid: "uzkgihrpknrnxtppqurjvr1829z87571",
      day: "2023-07-02",
    },
  })
  setTimeout(() => {
    picUrl.value = [
      ...res1.data.map((item) => item.picUrl),
      ...res2.data.map((item) => item.picUrl),
      ...res3.data.map((item) => item.picUrl),
      ...res4.data.map((item) => item.picUrl),
      ...res5.data.map((item) => item.picUrl),
      ...res6.data.map((item) => item.picUrl),
    ]
  }, 5000)
})

const imgSrc = ref(
  "https://anime.girigirilove.com/upload/site/20230512-1/61ac4d0e203f1ffe9663a6b03270928f.png",
)
const downloadImage = () => {
  console.log(imgSrc.value) //下载图片地址和图片名
  let image = new Image()
  // 解决跨域 Canvas 污染问题
  // image.setAttribute("crossOrigin", "anonymous")
  image.crossOrigin = "anoymous"
  image.onload = function () {
    let canvas = document.createElement("canvas")
    canvas.width = image.width
    canvas.height = image.height
    let context = canvas.getContext("2d")
    context.drawImage(image, 0, 0, image.width, image.height)
    let url = canvas.toDataURL("image/png") //得到图片的base64编码数据
    let a = document.createElement("a") // 生成一个a元素
    let event = new MouseEvent("click") // 创建一个单击事件
    a.download = name || "photo" // 设置图片名称
    a.href = url // 将生成的URL设置为a.href属性
    a.dispatchEvent(event) // 触发a的单击事件
  }
  image.src = imgSrc.value
}

const chatGPTClick = () => {
  // const imageUrl =
  //   "http://localhost:3000/proxy?url=https://anime.girigirilove.com/upload/site/20230512-1/61ac4d0e203f1ffe9663a6b03270928f.png" // 替换为你要下载的图片URL

  // 7-2图片测试
  const imageUrl =
    "http://localhost:3000/proxy?url=https://qn-store-pub-tx.seewo.com/FgrDuaARFXLtglYaUaKXRE0RqaVG" // 替换为你要下载的图片URL

  // 创建一个隐藏的图片元素
  const image = new Image()
  image.crossOrigin = "anonymous" // 设置图片的跨域属性
  image.src = imageUrl

  // 等待图片加载完成后再进行绘制和下载
  image.onload = () => {
    // 创建一个新的 Canvas 元素
    const canvas = document.createElement("canvas")
    canvas.width = image.width
    canvas.height = image.height

    const context = canvas.getContext("2d")

    // 在 Canvas 上绘制图片
    context.drawImage(image, 0, 0)

    // 将 Canvas 转换为图片的 data URL
    const dataUrl = canvas.toDataURL("image/png") // 可以根据需要设置图片格式

    // 创建一个隐藏的链接元素
    const downloadLink = document.createElement("a")
    downloadLink.href = dataUrl
    downloadLink.download = "image.jpg" // 设置下载的文件名

    // 将链接元素添加到文档中
    document.body.appendChild(downloadLink)

    // 触发链接的点击事件，开始下载
    downloadLink.click()

    // 下载完成后移除链接元素
    document.body.removeChild(downloadLink)
  }
}
</script>

<template>
  <a :href="imgSrc" download="image.jpg">
    <button>下载图片</button>
  </a>
  <button @click="chatGPTClick">下载图片</button>

  <img src="@/assets/1.png" />
  <a href="./src/assets/1.png" download>点击下载一张项目本地图片</a>
  <img
    src="https://anime.girigirilove.com/upload/site/20230512-1/61ac4d0e203f1ffe9663a6b03270928f.png"
  />
  <el-button type="primary" plain @click="downloadImage">下载星野爱</el-button>
  <div style="display: flex">
    <div v-for="(item, index) in picUrl" :key="index">
      <img
        width="101"
        height="76"
        referrerpolicy="no-referrer"
        :src="item"
        alt="图片"
      />
    </div>
  </div>

  <!-- <div>
    <SvgIcon name="smile"></SvgIcon>
    <Pagination name="smile"></Pagination>
    App
    <svg><use xlink:href="#icon-smile"></use></svg>
    <el-button type="primary">111</el-button>
    <el-icon><Plus /></el-icon>
    <el-icon><CirclePlus /></el-icon>
    <div class="box1">
      <div class="box2"></div>
    </div>
  </div> -->
  <div></div>
</template>

<style scoped lang="scss">
.box1 {
  .box2 {
    width: 100px;
    height: 200px;
    // 全局变量测试
    background-color: $base-color;
  }
}

.test-div {
  width: 101px;
  height: 76px;
  background-image: url("https://qn-store-pub-tx.seewo.com/FgrDuaARFXLtglYaUaKXRE0RqaVG");
  // background-image: url("@/assets/1.png");
  // 星野爱
  // background-image: url("https://anime.girigirilove.com/upload/site/20230512-1/61ac4d0e203f1ffe9663a6b03270928f.png");
  // 舌头
  // background-image: url("https://steamuserimages-a.akamaihd.net/ugc/858355614965034643/1CECB02C25B326CA0B3FA12A09126491C2296A00/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false");
}
</style>
