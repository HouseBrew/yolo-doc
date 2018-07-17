<template lang="pug">
  div
    vi-avatar(:src="src" size="30")
    vi-avatar(:src="src" size="40")
    vi-avatar(:src="src" size="50")
</template>

<script>
  export default {
    data () {
      return {
        src: 'https://api.adorable.io/avatars/285/me'
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .vi-avatar
    margin-left 10px
</style>
