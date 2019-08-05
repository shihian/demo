<template>
  <!-- template 底下只允許一個 DOM -->
  <div class="container">
    <!-- 插入hearder，標籤可自定義 -->
    <nbaHeader></nbaHeader>
    <main class="main">
      <nuxt class="wrapper"></nuxt>
    </main>
    <!-- 插入footer，標籤可自定義 -->
    <nbaFooter></nbaFooter>
  </div>
</template>

<script>
import nbaHeader from '@/components/header' // 引入組件
import nbaFooter from '@/components/footer' // 引入組件

export default {
  components: {
    nbaHeader,
    nbaFooter
  }
}
</script>

<style lang="stylus" scoped></style>
