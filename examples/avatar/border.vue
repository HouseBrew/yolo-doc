<template lang="pug">
  div
    vi-avatar(:src="src")
    vi-avatar(:src="src")
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
