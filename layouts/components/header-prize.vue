<template>
  <!-- template 底下只允許一個 DOM -->
  <!-- // header -->
  <header class="header">
    <div class="wrapper">
      <div class="logo-group">
        <a class="logo udnLogo" href="//udn.com/news/index" target="_blank">
          <span>udnLogo</span>
        </a>
        <a class="logo nbaLogo" href="//nba.udn.com/" target="_blank">
          <span>nbaLogo</span>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
// scoped 作用域，只在這兒才能使用喔！
.header
  background-image url('~@/assets/img/header-bg.jpg')
  background-color #0025a6
  background-position top center
  display flex
  flex-flow column nowrap
  flex 0 0 100px
  @media screen and (max-width 375px)
    flex 0 0 90px
.wrapper
  width 1200px
  margin 0 auto
  position relative
  height 100px
  display flex
  justify-content center
  align-items center
  @media screen and (max-width 1216px)
    width 1000px
  @media screen and (max-width 1016px)
    width 730px
  @media screen and (max-width 767px)
    width 90%
  @media screen and (max-width 375px)
    height 90px
.logo
  &-group
    position absolute
    display flex
    left 30px
    top 30px
    @media screen and (max-width 1016px)
      left 0
      top 20px
    @media screen and (max-width 767px)
      top 30px
    .logo
      display block
      margin-right 20px
      background-size cover
      text-indent -9999px
      &:last-child
        margin-right 0
    .udnLogo
      width 200px
      height 50px
      background-image url('~@/assets/img/udnLogo.png')
      background-repeat no-repeat
      @media screen and (max-width 375px)
        width 160px
        height 40px
      @media screen and (max-width 767px)
        width 140px
        height 35px
    .nbaLogo
      width 79px
      height 50px
      background-image url('~@/assets/img/nbaLogo.png')
      background-repeat no-repeat
      @media screen and (max-width 1216px)
        width 63px
        height 40px
      @media screen and (max-width 767px)
        width 55px
        height 35px
    img
      display block
      width 100%
</style>
