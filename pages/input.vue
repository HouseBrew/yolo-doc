<template>
  <div>
    <component-view :doc="doc"></component-view>
  </div>
</template>

<script>
  export default {
    name: 'avatar-view',
    data () {
      return {
        doc: {
          title: 'Input',
          desc: '<p>It could be an image or an icon</p>',
          examples: [
            { title: 'Usage', file: 'input/index', desc: `The avatar has a dynamic size that can be scaled for any situation. A <strong>tile</strong> variation is available for displaying an avatar without border radius.` },
            { title: 'State', file: 'input/state', desc: `Combining an avatar with other components allows you to build beautiful user interfaces right out of the box.` },
            { title: 'Darker', file: 'input/darker', desc: `Combining an avatar with other components allows you to build beautiful user interfaces right out of the box.` },
            { title: 'Icon', file: 'input/icon', desc: `Combining an avatar with other components allows you to build beautiful user interfaces right out of the box.` },
            { title: 'Clearble', file: 'input/clear', desc: `Combining an avatar with other components allows you to build beautiful user interfaces right out of the box.` },
          ],
          props: [
            [
              'value',
              'v-model',
              'String',
              'true'
            ],
            [
              'type',
              'input or textarea',
              'String',
              'input'
            ],
            [
              'placeholder',
              'native',
              'String',
              '-'
            ],
            [
              'name',
              'native',
              'String',
              '-'
            ],
            [
              'id',
              'native',
              'String',
              '-'
            ],
            [
              'disabled',
              'disabled the input',
              'Boolean',
              'false'
            ],
            [
              'error',
              'red border',
              'Boolean',
              ''
            ],
            [
              'readonly',
              'native',
              'Boolean',
              'false'
            ],
            [
              'clickable',
              'When you want the input to be readonly and also clickable with cursor showing a hand',
              'Boolean',
              'false'
            ],
            [
              'clearable',
              'shows the clear button when there are inputs',
              'Boolean',
              'false'
            ],
            [
              'prefix-icon',
              'prefix an icon',
              'string',
              '-'
            ],
            [
              'prefix-icon-size',
              'change the size of prefix icon',
              'Number',
              '-'
            ],
            [
              'suffix-icon',
              'suffix icon',
              'string',
              '-'
            ],
            [
              'suffix-icon-size',
              'change the size of suffix icon',
              'Number',
              '-'
            ],
            [
              'line',
              'change the default box style to line style',
              'Boolean',
              'false'
            ],
            [
              'no-resize',
              'for textarea disable the resize',
              'Boolean',
              'false'
            ],
            [
              'max-length',
              'native',
              'Number',
              '-'
            ],
            [
              'darker',
              'darker border style to make the input standout',
              'Boolean',
              'false'
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
