<template>
  <div>
    <h1>{{doc.title}}</h1>
    <p v-html="doc.desc"></p>
    <component-ex
      v-if="doc.examples"
      v-for="ex in doc.examples"
      :ex="ex">
    </component-ex>
  </div>
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

