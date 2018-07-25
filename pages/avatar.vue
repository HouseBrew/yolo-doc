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
          title: 'Avatar',
          desc: '<p>Make an image into a circle with border</p>',
          examples: [
            { title: 'Usage', file: 'avatar/index', desc: `Use it with an image, an icon or just text` },
            { title: 'Size', file: 'avatar/size', desc: `Combining an avatar with other components allows you to build beautiful user interfaces right out of the box.` },
          ],
          props: [
            [
              'border',
              'border will be shown by default if there is no color applied',
              'boolean',
              'true'
            ],
            [
              'size',
              'Controls the height and width of the avatar',
              'string | number',
              '50'
            ],
            [
              'src',
              'Use this attribute instead of using img inside slot when you want background image applied with background-size:cover - this is useful when the src image is not a square',
              'string',
              '-'
            ],
            [
              'color',
              'Color the avatar when you are using icon or text',
              'string',
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
