<template>
  <div>
    <component-view :doc="doc"></component-view>
  </div>
</template>

<script>
  export default {
    name: 'button-view',
    data () {
      return {
        doc: {
          title: 'Checkbox',
          desc: '<p>A group of options for multiple choices</p>',
          examples: [
            { title: 'Usage', file: 'checkbox/index', desc: `As radio or checkbox` },
            { title: 'Inline', file: 'checkbox/inline', desc: `Inline list of checkbox options` },
            { title: 'Disabled', file: 'checkbox/disable', desc: `Disable state for checkbox` },
          ],
          props: [
            [
              'label',
              'The checkbox label display',
              'String',
              '-'
            ],
            [
              'inline',
              'inline list of checkbox options',
              'boolean',
              'false'
            ],
            [
              'disabled',
              'Disable the checkbox',
              'boolean',
              'false'
            ],
            [
              'input-value',
              'v-model binding',
              'string | number | array',
              '-'
            ],
            [
              'value',
              'the option value - needed when input-value is an array',
              'string | number',
              '-'
            ]
          ],
          slots: {
            'v-avatar': {
              shared: ['default']
            }
          }
        }
      }
    }
  }
</script>
