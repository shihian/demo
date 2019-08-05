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
import nbaHeader from '@/layouts/components/header' // 引入組件
import nbaFooter from '@/layouts/components/footer' // 引入組件

export default {
  components: {
    nbaHeader,
    nbaFooter
  }
}
</script>

<style lang="stylus" scoped>
// scoped 作用域，只在這兒才能使用喔！
// .container
//   display flex
//   flex-direction column
//   min-height 100vh
//   height 100%
// .main
//   display flex
//   flex-flow column nowrap
//   flex 1 0 auto
//   min-height calc(100vh - 300px - 76px)
//   @media screen and (max-width 375px)
//     min-height calc(100vh - 250px - 76px)

// .wrapper
//   width 1200px
//   margin 0 auto
//   .main &
//     width 1000px
//     @media screen and (max-width 1216px)
//       width 900px
//     @media screen and (max-width 1016px)
//       width 600px
//     @media screen and (max-width 767px)
//       width 90%
</style>
