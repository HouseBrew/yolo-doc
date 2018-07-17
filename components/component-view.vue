<template lang="pug">
  div
    h1 {{doc.title}}
    p(v-html="doc.desc")
    table
      thead
        tr
          th Attribute
          th Description
          th Type
          th Default
      tbody
        tr(v-for="prop in doc.props")
          td(v-for="i in prop" v-html="i")
    component-ex(
      v-if="doc.examples"
      v-for="(ex, i) in doc.examples"
      v-bind:key="i"
      v-bind:ex="ex")
</template>

<script>
  export default {
    name: 'component-view',
    props: {
      doc: {
        type: Object,
        required: true
      }
    }
  }
</script>


<style lang="stylus">
  h1
    font-weight 300
    margin-bottom 16px
    font-size 44px

  p
    font-size 16px
    margin-bottom 20px

  table
    background white
    width 100%
    font-size 14px
    margin-bottom 24px
    text-align left

    th
      color #adadad

    td, th
      padding 8px
      border-bottom 1px solid #e1e1e1

    tr:last-child td
      border none
</style>
