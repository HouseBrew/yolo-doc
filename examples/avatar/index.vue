<template>
  <div class="ex-row">
    <vi-avatar>
      <img :src="src">
    </vi-avatar>
    <vi-avatar>
      J
    </vi-avatar>
    <vi-avatar color="blue">
      JR
    </vi-avatar>
    <vi-avatar color="green">
      <vi-icon name="star"/>
    </vi-avatar>
  </div>
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
