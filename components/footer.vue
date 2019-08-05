<template>
  <!-- template 底下只允許一個 DOM -->
  <!-- footer -->
  <footer class="footer">
    <div class="footer-copyright center">
      <b>聯合線上公司 著作權所有</b> &copy; udn.com All Rights Reserved.
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
// scoped 作用域，只在這兒才能使用喔！
.footer
  color #ffffff
  background-color #3e3f3f
  text-align center
  display flex
  flex-flow column nowrap
  flex 0 0 76px
  justify-content center
  align-items center
  &-copyright
    display block
    font-size 15px
    @media screen and (max-width 767px)
      font-size 14px
    b
      @media screen and (max-width 767px)
        display block
</style>
