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
          desc: '<p>It could be an image or an icon</p>',
          examples: [
            { title: 'Standard display', file: 'avatar/border', desc: `The avatar has a dynamic size that can be scaled for any situation. A <strong>tile</strong> variation is available for displaying an avatar without border radius.` },
            { title: 'Size', file: 'avatar/size', desc: `Combining an avatar with other components allows you to build beautiful user interfaces right out of the box.` },
            { title: 'Icon and text', file: 'avatar/border', desc: 'An avatar also accepts the <code>v-icon</code> component or text. Mix and match functionality to create something unique.'}
          ],
          props: [
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
