<template lang="pug">
  vi-row
    vi-col
      p No border
      vi-avatar(:src="src" v-bind:border="false")
    vi-col
      p 1px border
      vi-avatar(:src="src")
    vi-col
      p 2px border
      vi-avatar(:src="src" v-bind:border="2")
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
