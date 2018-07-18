<template>
  <vi-select :allow-create="true" :chip="true" collapse-multiple="Taxonomy" v-model="createdEmails"/>
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
