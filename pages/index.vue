<template>
  <div class="app">
    <!-- 開始游戲 -->
    <div v-if="gameStatus === 'hasNotStated'" class="start">
      <a href="#" class="start-button" @click="gameStart">START</a>
    </div>

    <!-- 遊戲進行 -->
    <div v-if="gameStatus === 'gaming'" class="game">
      <!-- 狀態區 -->
      <!-- <div class="status">
        <div class="progress-block">
          <div class="progress-bar">
            <span class="progress-bar-block" :style="progressBarStyle"></span>
          </div>
          <div class="progress-text">
            <span class="progress-text-block">{{ progress }}</span>
          </div>
        </div>
        <div
          class="second-block"
          :class="{ notification: gameIsComingToTheEnd }"
        >
          <span class="second-text">{{ totalTime }}</span>
        </div>
      </div> -->
      <div class="questions">
        <!-- 題目區 -->
        <div
          v-for="(question, index) in newQuestions"
          v-show="index === currentIndex"
          :key="index"
          class="questions-block"
        >
          <div class="questions-player">
            <img
              draggable="false"
              :src="require(`@/assets/img/${question.id}.png`)"
            />
          </div>
          <div class="button-group">
            <span
              v-for="(opt, optIndex) in question.options"
              :key="`opt-${optIndex}`"
              class="button button-basic animated flipInX"
              @click="ans(opt)"
              v-text="opt.name"
            ></span>
          </div>
        </div>
      </div>
    </div>

    <!-- 開始結束 -->
    <div
      v-if="gameStatus !== 'hasNotStated' && gameStatus !== 'gaming'"
      class="finish"
    >
      <span class="finish-text">你的NBA金頭腦評分</span>
      <div class="finish-score">
        <!-- 總得分 -->
        <span>{{ score }}</span>
      </div>
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v3.3&appId=140332166585208&autoLogAppEvents=1"
      ></script>
      <div class="button-group">
        <a
          class="button-basic fb"
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A//nba.udn.com/playerquiz/"
        >
          <span>分享到 FaceBook</span>
        </a>
        <div class="button-basic again" @click="playAgain">
          <span>再玩一次</span>
        </div>
      </div>
    </div>

    <nbaButtonGroup></nbaButtonGroup>
  </div>
</template>

<script>
import nbaButtonGroup from '@/components/buttongroup'

// 常數 ==> 不會被改變的
const status = {
  hasNotStated: 'hasNotStated',
  gaming: 'gaming',
  end: 'end'
}

export default {
  components: { nbaButtonGroup },
  props: {},
  data() {
    return {
      gameStatus: status.hasNotStated,
      dataSet: [], // 接api資料回來
      newQuestions: [], // 建立新陣列資料，舊有資料不動
      currentIndex: 0, // 當前
      score: 0 // 得分
    }
  },
  computed: {
    // 當前題數
    currentQuestion() {
      return this.newQuestions[this.currentIndex]
    },
    // 總題數
    totalQuestionsCount() {
      return this.newQuestions.length
    },
    // 題數
    questionNo() {
      return this.currentIndex + 1
    }
  },
  watch: {},
  created() {
    this.init()
  },
  mounted() {
    this.getQuestions()
  },
  methods: {
    // 初始化
    init() {
      this.gameStatus = status.hasNotStated
      this.newQuestions = []
      this.currentIndex = 0
      this.score = 0
    },
    // 開始游戲
    gameStart() {
      this.gameStatus = status.gaming
    },
    // 獲取題目
    getQuestions() {
      this.$axios
        .$get('https://event.udn.com/event/playerquiz/show_question.jsp')
        .then((res) => {
          // console.log(res)
          this.dataSet = res.dataSet
          // console.log(this.dataSet)
          this.newQuestions = this.dataSet.slice(0, 5) // 30 題再篩 5 筆出來
          // console.log(this.newQuestions)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    // 檢查答案
    ans(opt) {
      if (opt.id === this.currentQuestion.id) {
        this.score += 1
      }
      // 切換到下一題
      if (this.questionNo === this.totalQuestionsCount) {
        this.gameFinish()
      } else {
        this.currentIndex += 1
      }
    },
    // 遊戲結束
    gameFinish() {
      this.gameStatus = status.end
    },
    // 再玩一次
    playAgain() {
      this.init()
      this.getQuestions()
    }
  }
}
</script>

<style lang="stylus" scoped>
.start
  &-button
    display block
    cursor pointer
    margin 0 auto
    width 210px
    height 210px
    line-height 210px
    text-align center
    font-size 30px
    font-weight bold
    text-decoration none
    color #fcd703
    background-image url('~@/assets/img/start-bg.jpg')
    background-repeat no-repeat
    margin-top 50px
    user-select none
    &:hover
      font-size 34px

.questions
  text-align center
  margin-top 50px
  &-player
    margin-bottom 20px
    img
      display block
      max-width 410px
      max-height 230px
      width 100%
      height auto
      margin 0 auto
      user-select none
      // animation-delay .1s

.status
  display flex
  justify-content space-between
  margin 50px auto 30px
  @media screen and (max-width 767px)
    display block

.progress
  &-block
    display flex
    align-content space-between
    width calc(100% - 250px)
    @media screen and (max-width 1016px)
      width calc(100% - 150px)
    @media screen and (max-width 767px)
      width 100%
      margin-bottom 15px
  &-bar
    position relative
    display block
    width calc(100% - 90px)
    height 50px
    background-color #d5d5d5
    &-block
      position absolute
      top 0
      left 0
      display block
      width 0
      height 100%
      transition .5s
      // transition .1s width linear
      background-color #1d4289
  &-text
    font-size 26px
    color #666666
    width 90px
    text-align center
    line-height 50px

.second
  &-block
    margin-left 10px
    width 240px
    font-size 26px
    height 50px
    background-color #ffffff
    border #999999 solid 4px
    display flex
    justify-content center
    align-items center
    @media screen and (max-width 1016px)
      width 140px
    @media screen and (max-width 767px)
      width 100%
      margin-left 0
  &-text
    &:after
      display inline-block
      margin-left 3px
      font-size 16px
      content '秒'

.spend
  &-bar
    position relative
    margin 30px auto 0
    width 100%
    height 5px
    background-color #d5d5d5
    &-block
      position absolute
      top 0
      left 0
      display block
      width 0
      height 100%
      // transition 1s width linear
      background-color #9db1d7
      animation-name secbarB
      animation-duration 60s
      animation-timing-function linear // 相同速度播放
      animation-fill-mode forwards // 停留在結束的狀態

.finish
  margin-top 50px
  text-align center
  &-text
    font-size 30px
    font-weight bold
    line-height 1
    @media screen and (max-width 375px)
      font-size 28px
  &-score
    display flex
    align-items center
    justify-content center
    margin 10px auto 30px
    padding 30px 0
    min-width: 250px
    max-width 300px
    font-size 50px
    font-weight bold
    color #bb132a
    background-color #ffffff
    outline #999999 solid 4px

.form
  max-width 300px
  margin 0 auto
  p
    font-size 18px
    margin 30px auto 10px
  input
    margin 0 auto 10px
    padding 15px 20px
    max-width 300px
    width 100%
    height 60px
    font-size 16px
    border 4px solid #999
    background-color #ffffff
  [for="code"]
    display block
    position relative
  .keyImage
    position absolute
    right 4px
    top 10px
    cursor pointer

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

.notification
  box-shadow 0px 0px 10px 4px #f5d40e
  border none
  animation fade .5s linear infinite
  z-index 10
</style>
