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
          title: 'Button',
          desc: '<p>It could be an image or an icon</p>',
          examples: [
            { title: 'Outline', file: 'button/outline', desc: `The avatar has a dynamic size that can be scaled for any situation. A <strong>tile</strong> variation is available for displaying an avatar without border radius.` },
            { title: 'Fill', file: 'button/fill', desc: `Combining an avatar with other components allows you to build beautiful user interfaces right out of the box.` },
            { title: 'Flat', file: 'button/flat', desc: `Combining an avatar with other components allows you to build beautiful user interfaces right out of the box.` },
            { title: 'Size', file: 'button/size', desc: `Combining an avatar with other components allows you to build beautiful user interfaces right out of the box.` },
            { title: 'Text', file: 'button/text', desc: `Combining an avatar with other components allows you to build beautiful user interfaces right out of the box.` },
          ],
          props: [
            [
              'border',
              'Give the avatar a border, you can control how thick by giving a number',
              'String',
              'true'
            ],
            [
              'size',
              'Controls the height and width of a child <code>img</code> or <code>v-icon</code>',
              'String',
              '48px'
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
