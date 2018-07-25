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
          title: 'Chip',
          desc: '<p>It could be an image or an icon</p>',
          examples: [
            { title: 'Usage', file: 'chip/index', desc: `The avatar has a dynamic size that can be scaled for any situation. A <strong>tile</strong> variation is available for displaying an avatar without border radius.` },
            { title: 'Removable', file: 'chip/removable', desc: `The avatar has a dynamic size that can be scaled for any situation. A <strong>tile</strong> variation is available for displaying an avatar without border radius.` },
            { title: 'Outline', file: 'chip/outline', desc: `Combining an avatar with other components allows you to build beautiful user interfaces right out of the box.` },
            { title: 'Text', file: 'chip/text', desc: `Combining an avatar with other components allows you to build beautiful user interfaces right out of the box.` },
            { title: 'Size', file: 'chip/size', desc: `Combining an avatar with other components allows you to build beautiful user interfaces right out of the box.` },
            { title: 'Error', file: 'chip/error', desc: `Combining an avatar with other components allows you to build beautiful user interfaces right out of the box.` },
            { title: 'Prepend', file: 'chip/prepend', desc: `Combining an avatar with other components allows you to build beautiful user interfaces right out of the box.` },
          ],
          props: [
            [
              'removable',
              'Add a close button',
              'boolean',
              'false'
            ],
            [
              'prepend',
              'Prepend another text to the label',
              'string',
              '-'
            ],
            [
              'small',
              'Smaller label',
              'Boolean',
              'false'
            ],
            [
              'large',
              'Larger label',
              'Boolean',
              'false'
            ],
            [
              'outline',
              'Outline style',
              'Boolean',
              'false'
            ],
            [
              'text',
              'text only label - remove padding, border and background',
              'Boolean',
              'false'
            ],
            [
              'color',
              'fill in the label background with color',
              'String',
              '-'
            ],
            [
              'error',
              'Highlight the label with error border',
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
