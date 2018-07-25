<template>
  <div>
    <component-view :doc="doc"></component-view>
  </div>
</template>

<script>
  export default {
    name: 'icon-view',
    data () {
      return {
        doc: {
          title: 'Icon',
          desc: '<p>It could be an image or an icon</p>',
          examples: [
            { title: 'Size', file: 'icon/size', desc: 'Specify icon size - this will add a inline width and height style to the icon svg' },
            { title: 'Color', file: 'icon/color', desc: 'Specific color of the icon' },
            { title: 'Transform', file: 'icon/transform', desc: 'Flip or rotate the icon' },
            { title: 'Collection', file: 'icon/collection', desc: `The default collection of icons - You could import your own` },
          ],
          props: [
            [
              'name',
              'Name of icon - check the collection section',
              'String',
              '-'
            ],
            [
              'size',
              'Specify icon size - this will add a inline width and height style to the icon svg',
              'String | Number',
              '22'
            ],
            [
              'color',
              'Color of icon',
              'String',
              '-'
            ],
            [
              'flip-y',
              'Flip along the Y-axis',
              'boolean',
              'false'
            ],
            [
              'flip-x',
              'Flip along the X-axis',
              'boolean',
              'false'
            ],
            [
              'rotate90',
              'Rotate 90 deg',
              'boolean',
              'false'
            ],
            [
              'rotate180',
              'Rotate 180 deg',
              'boolean',
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
