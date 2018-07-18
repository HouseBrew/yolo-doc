<template>
  <vi-select :allow-create="true" :chip="true" v-model="createdEmails"/>
</template>

<script>
  export default {
    data () {
      return  {
        createdEmails: []
      }
    }
  }
</script>
