<template lang="pug">
  .component-ex
    h3 {{ex.title}}
    p.desc {{ex.desc}}
    .code-section
      .example-box-wrap
        .example-box
          component(:is="component")
      vi-tabs
        vi-tab(name="Template")
          pre {{raw}}
        vi-tab(name="Script") Script
        vi-tab(name="Style") Style
</template>

<script>
  export default {
    name: 'component-example',
    props: {
      ex: {
        type: Object
      },
    },
    data () {
      return {
        component: null,
        raw: null
      }
    },
    methods: {
      boot (res) {
        this.raw = res
      }
    },
    mounted () {
      import(
        /* webpackChunkName: "examples" */
        /* webpackMode: "lazy-once" */
        `../examples/${this.ex.file}.vue`
        ).then(comp => {
        this.component = comp.default
      })

      import(
        /* webpackChunkName: "examples-source" */
        /* webpackMode: "lazy-once" */
        `!raw-loader!../examples/${this.ex.file}.vue`
        ).then(this.boot)
    }
  }
</script>

<style lang="stylus">
  .component-ex
    margin-bottom 40px

    h3
      font-size 24px
      font-weight 400
      margin-bottom 8px

    .desc
      font-size 14px

  .example-box-wrap
    padding 16px

  .example-box
    padding 20px
    border 1px solid #e1e1e1
    background white

  .code-section
    margin-top 20px
    background white

  .vi-tabs__list
    padding-left 20px
    padding-right 20px
    border-bottom 1px solid #e1e1e1

  .vi-tabs__panels
    font-size 12px
    padding 20px
    max-height 300px
    overflow-y scroll
    display none

  .vi-tabs__item
    width 150px
    text-align center
    margin-right 1px
    margin-bottom 10px
    display inline-flex
    justify-content center

    &--active
      background #414141
      a
        color white !important
</style>
