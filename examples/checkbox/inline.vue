<template>
  <div>
    <vi-checkbox inline v-for="(opt, i) in options" :key="i" v-model="multiple" :value="opt" :label="opt"/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        multiple: [],
        options: ['Option A', 'Option B', 'Option C']
      }
    }
  }
</script>
