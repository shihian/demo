<template>
  <!-- template 底下只允許一個 DOM -->
  <div class="container">
    <!-- 插入hearder，標籤可自定義 -->
    <nbaHeaderPrize></nbaHeaderPrize>
    <main class="main">
      <nuxt class="wrapper"></nuxt>
    </main>
    <!-- 插入footer，標籤可自定義 -->
    <nbaFooter></nbaFooter>
  </div>
</template>

<script>
import nbaHeaderPrize from '@/layouts/components/header-prize' // 引入組件
import nbaFooter from '@/layouts/components/footer' // 引入組件

export default {
  components: {
    nbaHeaderPrize,
    nbaFooter
  }
}
</script>

<style lang="scss" scoped></style>
