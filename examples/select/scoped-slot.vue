<template>
  <vi-select
    v-model="selected"
    :options="options"
    option-value="id"
    placeholder="Select an organization">
    <template slot="selection" slot-scope="{selection}">
      <vi-item v-if="selection" class="pl-0 pr-0">
        <vi-item-avatar>
          <vi-avatar size="30"><img :src="selection.logo_url"></vi-avatar>
        </vi-item-avatar>
        <vi-item-content>{{selection.name}}</vi-item-content>
      </vi-item>
    </template>
    <template slot="item" slot-scope="{item, toggle}">
      <vi-item @click="toggle(item)" :link="true" v-if="item">
        <vi-item-avatar>
          <vi-avatar size="30"><img :src="item.logo_url"></vi-avatar>
        </vi-item-avatar>
        <vi-item-content>{{item.name}}</vi-item-content>
      </vi-item>
    </template>
  </vi-select>
</template>

<script>
  export default {
    data () {
      return {
        selected: '',
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
