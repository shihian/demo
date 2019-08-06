<template>
  <!-- template 底下只允許一個 DOM -->
  <div class="button-group">
    <span
      v-for="(button, index) in buttons"
      :key="index"
      :class="button.className"
      class="button-basic"
      @click="button.onClicked"
      v-text="button.text"
    ></span>
  </div>
</template>

<script>
export default {
  name: 'ButtonGroup', // 組件名稱
  data() {
    // 資料
    return {
      buttons: [
        { text: '活動贈品', className: 'prize', onClicked: this.prize },
        { text: '注意事項', className: 'explain', onClicked: this.explain },
        { text: '得獎名單', className: 'winning', onClicked: this.winning }
      ]
    }
  },
  methods: {
    // alert 活動贈品
    prize() {
      window.open('prize')
    },
    // alert 注意事項 -1
    // explain() {
    //   this.$swal({
    //     title: '注意事項-1',
    //     html: `<div class="inline_content">
    //         <strong>
    //           <ul>
    //             <li>NBA 聯盟相關的人員及球隊的任何成員、活動任何型式的贊助商以及宣傳的相關人員(包括相關的代理商與公關公司)，或者是任何跟上述這些人員相關的家庭或同居成員皆不能參加此活動或者是贏取活動獎項。</li>
    //           </ul>
    //         </strong>
    //       </div>`,
    //     showCloseButton: true,
    //     confirmButtonText: '關閉'
    //   })
    // },
    // alert 注意事項 -2
    explain() {
      this.$swal({
        title: '注意事項-2',
        html: `<div class="inline_content">
            <strong>
              <ul>
                <li>NBA 聯盟相關的人員及球隊的任何成員、活動任何型式的贊助商以及宣傳的相關人員(包括相關的代理商與公關公司)，或者是任何跟上述這些人員相關的家庭或同居成員皆不能參加此活動或者是贏取活動獎項。</li>
              </ul>
            </strong>
          </div>`,
        showCloseButton: true,
        confirmButtonText: '關閉'
      })
    },
    // 另開視窗
    winning() {
      window.open('https://nba.udn.com/nba/story/6780/3681007')
    }
  }
}
</script>

<style lang="stylus">
.swal2-shown
  padding-right 10px !important

.swal2-height-auto
  padding-right 0 !important

.swal2-popup
  font-size 16px !important
  background-color #f7f7f7 !important
  @media screen and (max-width 767px)
    font-size 13px !important
  .swal2-image
    margin-bottom 0
    height inherit
  .title
    margin-top 0
  .swal2-validation-message
    margin-top 1.25em

.swal2-title
  margin .4em 0 .4em

.swal2-close
  top 23px
  right 5px

.swal2title
  font-size 30px
  font-weight bold

.swal2-remark
  font-size 20px
  color #676565
  margin 20px auto

.inline_content
  padding-right 20px
  padding-left 20px
  max-height 60vh
  overflow-y auto
  strong
    display block
    text-align left
    overflow hidden
  h3
    margin 10px 0
    text-align center
  p
    color #ea0000
    text-align center
  ul
    margin 0
    margin-left -20px
    text-align justify
  li
    padding-top 5px
  img
    width 100%
    margin 10px auto 5px

.table
  &-head
    padding 0
    margin-left 0 !important
    font-family $font-primary
    font-weight 600
    background #ffffff
    display flex
    list-style-type none
    margin-bottom 2px !important
    li
      margin-right 2px
      text-align center
      color #ffffff
      font-weight 600
      padding 8px
      background-color #1850b8 !important
      &:last-child
        margin-right 0px
  &-row
    padding 0
    margin-left 0 !important
    font-family $font-primary
    background-color #ffffff
    list-style-type none
    li
      display flex
      padding 0
      color #ffffff
      margin-bottom 2px
      &:nth-child(odd)
        div
          background-color #095bd5
      &:nth-child(even)
        div
          background-color #1850b8
    div
      display inline-block
      padding 8px
      text-align center
      margin-right 2px
      &:last-child
        margin-right 0
.correct
  color #f5d40e
  width 200px
  @media screen and (max-width 767px)
    width 40%
.nickname
  width calc(100% - 200px)
  @media screen and (max-width 767px)
    width 60%
</style>
<style lang="stylus" scoped>
.button
  &-group
    display flex
    justify-content center
    margin 50px auto
    @media screen and (max-width 767px)
      display block
    .questions &
      margin 0 auto
    .finish &
      margin 20px auto
      display block
  &-basic
    cursor pointer
    display block
    margin 0 10px
    width calc((100% - 20px)/3)
    font-size 25px
    font-weight bold
    color #ffffff
    text-align center
    line-height 1.2
    padding 10px
    background-color #e4e4e4
    text-decoration none
    user-select none
    &:nth-child(2)
      .questions &
        animation-delay .2s
    &:nth-child(3)
      .questions &
        animation-delay .4s
    &:last-child
      @media screen and (max-width 767px)
        margin-bottom 0
    @media screen and (max-width 767px)
      width 100%
      margin 0 auto 10px
    .questions &
      font-size 20px
      color #666666
      max-width inherit
      min-height 120px
      display flex
      justify-content center
      align-items center
      @media screen and (max-width 767px)
        min-height 50px
    .finish &
      display block
    &.active
      background-color #ffffff
      outline 4px solid #999999
      outline-offset -4px
    &:hover
      opacity 0.85
      text-decoration none
      .questions &
        outline 4px solid #999999
        outline-offset -4px
    &.winning
      background-color #1d4289
    &.prize
      background-color #e74b5e
    &.explain
      background-color #9f9c9c
    &.ranking
      background-color #1d4289
    &.fb
      &:before
        content '\45'
        font-family "fontello"
        font-style normal
        font-weight normal
        display inline-block
        color #ffffff
        margin-right 5px
      max-width 300px
      width 100%
      background-color #3e5a99
      margin 0 auto 10px
    &.again
      &:before
        content '\67'
        font-family "fontello"
        font-style normal
        font-weight normal
        display inline-block
        color #ffffff
        margin-right 5px
      max-width 300px
      width 100%
      background-color #55a3c9
      margin 0 auto
    &.submit
      max-width 300px
      width 100%
      margin 10px auto 0
      background-color #b8152a
</style>
