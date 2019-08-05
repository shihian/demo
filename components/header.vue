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
      <div class="text text-group">
        <div class="text-words">
          猜球員名字
        </div>
        <strong class="text-words"> <strong>5/5</strong>你能對幾題？ </strong>
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
  flex 0 0 300px
  @media screen and (max-width 375px)
    flex 0 0 250px
.wrapper
  width 1200px
  margin 0 auto
  position relative
  height 300px
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
    height 250px
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
.text
  &-group
    color #ffff
    font-size 28px
    line-height 1
    text-align center
    @media screen and (max-width 1016px)
      padding-top 40px
    @media screen and (max-width 767px)
      font-size 1.6rem
    @media screen and (max-width 375px)
      padding-top 50px
      font-size 1.4rem
  &-words
    margin-bottom 20px
    @media screen and (max-width 1016px)
      margin-bottom 10px
    &:last-child
      margin-bottom 0
  img
    @media screen and (max-width 375px)
      width 100%
  strong
    color #f5d40e
    font-size 50px
    @media screen and (max-width 767px)
      font-size 2.4rem
    @media screen and (max-width 375px)
      font-size 2rem
  span
    color #f5d40e
    font-size 28px
    font-weight bold
    @media screen and (max-width 767px)
      font-size 1.6rem
    @media screen and (max-width 375px)
      font-size 1.4rem
</style>
