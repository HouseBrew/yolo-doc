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
            { title: 'Standard display', file: 'icon/size', desc: `The avatar has a dynamic size that can be scaled for any situation. A <strong>tile</strong> variation is available for displaying an avatar without border radius.` },
            { title: 'Advanced usage', file: 'icon/collection', desc: `Combining an avatar with other components allows you to build beautiful user interfaces right out of the box.` },
          ],
          props: [
            [
              'size',
              'String',
              '48px',
              'Controls the height and width of a child <code>img</code> or <code>v-icon</code>'
            ],
            [
              'tile',
              'Boolean',
              'False',
              'Removes the border radius from the avatar'
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
