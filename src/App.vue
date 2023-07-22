<script setup lang="ts"></script>

<template>
  <div>
    2
    <SvgIcon name="smile"></SvgIcon>
    55
    <Pagination name="smile"></Pagination>
    3 App
    <svg><use xlink:href="#icon-smile"></use></svg>
    <el-button type="primary">111</el-button>
    <el-icon><Plus /></el-icon>
    <el-icon><CirclePlus /></el-icon>
    <div class="box1">
      <div class="box2"></div>
    </div>
  </div>
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
</style>
