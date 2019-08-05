<template>
  <div>
    about
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        { text: '活動贈品', className: 'prize', onClicked: this.prize },
        { text: '注意事項', className: 'explain', onClicked: this.explain },
        { text: '得獎名單', className: 'winning', onClicked: this.winning }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
