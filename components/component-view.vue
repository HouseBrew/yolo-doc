<template>
  <div>
    <h1>{{doc.title}}</h1>
    <p v-html="doc.desc"></p>
    <table>
      <tr v-for="prop in doc.props">
        <td v-for="i in prop" v-html="i"></td>
      </tr>
    </table>
    <component-ex
      v-if="doc.examples"
      v-for="(ex, i) in doc.examples"
      :key="i"
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

