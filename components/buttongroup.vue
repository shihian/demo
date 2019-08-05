<template>
  <!-- <div>
    <div class="button-group">
      <span class="button-basic prize" @click="prize">活動贈品</span>
      <span class="button-basic explain" @click="explain">注意事項</span>
      <span class="button-basic winning" @click="winning">得獎名單</span>
    </div>
  </div> -->
  <div class="button-group">
    <!-- <nuxt-link
      v-for="(button, index) in buttons"
      :key="index"
      to="/about"
      tag="span"
      :class="button.className"
      class="button-basic"
      v-text="button.text"
    ></nuxt-link> -->
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
  name: 'ButtonGroup',
  data() {
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
    // alert 注意事項
    explain() {
      this.$swal({
        title: '注意事項',
        html: `<div class="inline_content">
            <strong>
              <ul>
                <li>NBA 聯盟相關的人員及球隊的任何成員、活動任何型式的贊助商以及宣傳的相關人員(包括相關的代理商與公關公司)，或者是任何跟上述這些人員相關的家庭或同居成員皆不能參加此活動或者是贏取活動獎項。</li>
                <li>獎項不能隨意轉換或變現，也不可交換或想改變獎項內容，但如果獎項目前因為某種原因無法取得可由贊助商自行決定是否更換，但更換之項目必須為等值商品。得獎者必須要自行支付所有相應產生的稅金以及其他可能之花費。</li>
                <li>所有活動相關辦法，皆以本篇發文公佈為主，獎品項目則依實物為主。</li>
                <li>中獎網友填寫資料之目的係作為確認身分，以便進行活動及獎品領取。聯合線上保證登入資料不洩漏予第三人，亦不進行前述目的範圍以外之利用。未依規定詳填資料（姓名、E-Mail）， 致網友有任何損失者，聯合線上恕不負責。</li>
                <li>本活動得獎資料如有不符合資格或取消者皆不遞補。所有獎項皆不重複得獎(包括 同IP)，如有發現偽造資格或不法得獎者，聯合線上皆有權取消得獎資格。</li>
                <li>參加者於參加本活動同時，即同意接受本活動之活動辦法與注意事項規範，並須遵守聯合線上的服務條款，若發現有使用網頁機器人參與活動違反之規定，聯合線上得取消其參加或得獎資格，並就因此所生之損害，得向參加者請求損害賠償。</li>
                <li>參加者應保證所有填寫或提出之資料均為真實且正確，且未冒用或盜用任何第三人之資料。如有不實 或不正確之情 事，聯合線上得取消參加或得獎資格。如因此致聯合線上無法通知其得獎訊息時，聯合線上不負任何法律責任，且如有致損害於聯合 線上或其他任何第三人，參加者應負一切相關責任。</li>
                <li>得獎者應於聯合線上通知之期限內回覆確認同意領取獎品，並提供聯合線上所要求之完整領獎文件， 逾期視為棄權。</li>
                <li>如有任何因電腦、網路、電話、技術或不可歸責於聯合線上之事由，而使參加者所寄出或登錄之資料 有遲延、遺失、 錯誤、無法辨識或毀損之情況致使參加者無法參加活動時，聯合線上不負任何法律責任，參加者亦不得因此異議。</li>
                <li>如本活動因不可抗力或其他特殊原因致無法舉行時，聯合線上有權決定取消、終止、修改或暫停本活動。</li>
                <li>活動獎項以公佈於本網站上的資料為準，如遇不可抗拒或非可歸責於聯合線上之因素，致無法提供原訂獎項時，聯合線上保留更換其他等值獎項之權利。</li>
                <li>依中華民國稅法規定，獎項金額若超過新台幣 1,000 元，得獎人須依規定填寫並繳交相關中獎收據。得獎者若無法依相關規定配合主辦單位辦理，則視為自動棄權，不具得獎資格。獎項價值超過新台幣 20,000 元者，中獎者依法需自付 10% 稅額 (海外人士或不具中華民國身分者，機會中獎所得稅為20%)。贈品廠商將開立各類所得稅扣繳憑單給中獎者。如果得獎者不願意給付得獎商品之稅額，則視為得獎者自動棄權，不具得獎資格。</li>
                <li>參加者如因參加本活動或因活動獎項而遭受任何損失，聯合線上及相關之母公司、子公司、關係企業、員工、及代理商不負任何責任。一旦得獎者領取獎品後，若有遺失或被竊，聯合線上或贊助廠商等不發給任何證明或補償。</li>
                <li>獎項寄送地區僅限台、澎、金、馬，聯合線上不處理郵寄獎品至海外地區之事宜。本活動之獎品不得轉換、轉讓或折換現金。</li>
                <li>參加者（包含相關繼承者、執行者或管理者）對於獲得的贈品，不可對 NBA 相關單位以及其相關人員（主席、官員、員工、代理商、關係企業、廣告商、公關、贈品贊助商）提出質疑、要求、損壞賠償，或者是做出任何行為或是具有抗爭事實（對於人或者是活動及贈品）的行為，亦不可鼓勵他人和自己去發生對於贈品要求補償的行為。</li>
                <li>其他未盡事宜，悉依主辦單位相關規定。若有任何活動問題，請來信 vaservice@udn.com。</li>
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
