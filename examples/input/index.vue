<template>
  <vi-row>
    <vi-col xs6>
      <p>Default</p>
      <vi-input v-model="text" placeholder="Enter some text here"/>
      <vi-input v-model="text" placeholder="Enter some text here" prefix-icon="search" class="mt-16"/>
    </vi-col>
    <vi-col xs6>
      <p>Line style</p>
      <vi-input line v-model="text2" placeholder="Enter some text here"/>
      <vi-input line v-model="text" placeholder="Enter some text here" prefix-icon="search" class="mt-16"/>
    </vi-col>
  </vi-row>
</template>

<script>
  export default {
    data () {
      return {
        text: '',
        text2: ''
      }
    }
  }
</script>
