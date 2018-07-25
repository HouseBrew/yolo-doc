<template>
  <vi-row>
    <vi-col xs4>
      <p>Boolean</p>
      <vi-checkbox v-model="boolean" label="On or Off"/>
    </vi-col>
    <vi-col xs4>
      <p>Radio</p>
      <vi-checkbox v-for="opt in options" :key="opt" v-model="single" :value="opt" :label="opt"/>
    </vi-col>
    <vi-col xs4>
      <p>Multiple</p>
      <vi-checkbox v-for="(opt, i) in options" :key="i" v-model="multiiple" :value="opt" :label="opt"/>
    </vi-col>
  </vi-row>
</template>

<script>
  export default {
    data () {
      return {
        boolean: false,
        multiiple: [],
        single: '',
        options: ['Option A', 'Option B', 'Option C']
      }
    }
  }
</script>
