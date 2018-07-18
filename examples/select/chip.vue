<template>
  <vi-select :chip="true" v-model="selectedMultiple" :options="options" option-value="id"/>
</template>

<script>
  export default {
    data () {
      return {
        selectedMultiple: [],
        options: [
          {
            logo_url: 'https://api.adorable.io/avatars/285/me',
            name: 'Apple',
            id: '13a5147b-8904-4af7-9da9-489cd64430cc'
          },
          {
            logo_url: 'https://api.adorable.io/avatars/285/me2',
            name: 'Banana',
            id: '23a5147b-8904-4af7-9da9-489cd64430cc'
          },
          {
            logo_url: 'https://api.adorable.io/avatars/285/me3',
            name: 'Orange',
            id: '33a5147b-8904-4af7-9da9-489cd64430cc'
          }
        ]
      }
    }
  }
</script>
