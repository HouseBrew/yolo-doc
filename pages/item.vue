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
          title: 'Item',
          desc: '<p>It could be an image or an icon</p>',
          examples: [
            { title: 'Link', file: 'item/link', desc: `The avatar has a dynamic size that can be scaled for any situation. A <strong>tile</strong> variation is available for displaying an avatar without border radius.` },
            { title: 'Link', file: 'item/link-2', desc: `The avatar has a dynamic size that can be scaled for any situation. A <strong>tile</strong> variation is available for displaying an avatar without border radius.` },
            { title: 'Link', file: 'item/link-3', desc: `The avatar has a dynamic size that can be scaled for any situation. A <strong>tile</strong> variation is available for displaying an avatar without border radius.` },
            { title: 'Avatar', file: 'item/avatar', desc: `Combining an avatar with other components allows you to build beautiful user interfaces right out of the box.` },
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
