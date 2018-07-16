<template>
  <div>
    <h3>{{ex.title}}</h3>
    <h3>{{ex.desc}}</h3>
    <component :is="component"></component>
  </div>
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
        component: null
      }
    },
    mounted () {
      import(
        /* webpackChunkName: "examples" */
        /* webpackMode: "lazy-once" */
        `../examples/${this.ex.file}.vue`
        ).then(comp => {
          console.log(comp)
        this.component = comp.default
      })
    }
  }
</script>
