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
          title: 'Menu',
          desc: '<p>It could be an image or an icon</p>',
          examples: [
            { title: 'Usage', file: 'menu/index', desc: `The avatar has a dynamic size that can be scaled for any situation. A <strong>tile</strong> variation is available for displaying an avatar without border radius.` },
            { title: 'Direction', file: 'menu/direction', desc: `Default is bottom and right` },
            { title: 'Disabled', file: 'menu/disabled', desc: `Sometime you need to disable the menu so that it cannot open. There is a extra class vi-menu__activator--disabled added to the activator if you want to customize your styling` },
            { title: 'Nudge', file: 'menu/nudge', desc: `control the space between the activator and the menu. Note: please use number instead of string, otherwise not working` },
            { title: 'Offset', file: 'menu/offset', desc: `By default offset-y is true. thats why the menu will open under the activator. You can offset the menu horizontally like this` },
            { title: 'Content Click', file: 'menu/content-click', desc: `Combining an avatar with other components allows you to build beautiful user interfaces right out of the box.` },
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
