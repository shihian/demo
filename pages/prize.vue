<template>
  <div class="prize">
    <h1>活動贈品</h1>
    <strong>
      <ul>
        <li>當日最高分 贏得NBA公仔</li>
      </ul>
      <img src="@/assets/img/prize.jpg" />
      <ul>
        <li>答對20題以上 贏得NBA長傘</li>
      </ul>
      <img src="@/assets/img/prize2.jpg" />
      <ul>
        <li>每日最高分得獎名單將於7/10公布</li>
      </ul>
    </strong>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'NBA金頭腦-活動贈品'
    }
  },
  layout: 'prize'
}
</script>

<style lang="stylus" scoped>
// scoped 作用域，只在這兒才能使用喔！
.container
  display flex
  flex-direction column
  min-height 100vh
  height 100%
.main
  display flex
  flex-flow column nowrap
  flex 1 0 auto
  min-height calc(100vh - 300px - 76px)
  @media screen and (max-width 375px)
    min-height calc(100vh - 250px - 76px)

.wrapper
  margin 0 auto
  .main &
    width 500px
    padding-top 50px
    padding-bottom 50px
    @media screen and (max-width 767px)
      width 90%
    img
      width 100%
</style>
