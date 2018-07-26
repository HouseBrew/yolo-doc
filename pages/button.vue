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
            { title: 'Usage', file: 'button/index', desc: `Sometimes you want a less prominent choice - outline could be a good way to do. Note that the grey button behave differently - when hover it won't be filled, but only darken the border` },
            { title: 'Outline', file: 'button/outline', desc: `Sometimes you want a less prominent choice - outline could be a good way to do. Note that the grey button behave differently - when hover it won't be filled, but only darken the border` },
            { title: 'Fill', file: 'button/fill', desc: `Show the background until hover.` },
            { title: 'Text', file: 'button/text', desc: `Combining an avatar with other components allows you to build beautiful user interfaces right out of the box.` },
            { title: 'Flat', file: 'button/flat', desc: `Combining an avatar with other components allows you to build beautiful user interfaces right out of the box.` },
            { title: 'Size', file: 'button/size', desc: `Combining an avatar with other components allows you to build beautiful user interfaces right out of the box.` },
          ],
          props: [
            [
              'color',
              'set the background color, could be used in-pair with text/flat/outline props',
              'String',
              '-'
            ],
            [
              'outline',
              'button without background but border. For string it accept <code>secondary</code> <code>tertiary</code>',
              'Boolean, String',
              'false'
            ],
            [
              'text',
              'button without background and border. For string it accept <code>secondary</code>',
              'Boolean, String',
              'false'
            ],
            [
              'flat',
              'Show the background until hover',
              'Boolean',
              'false'
            ],
            [
              'icon',
              'for icon button',
              'Boolean',
              'false'
            ],
            [
              'disabled',
              'disable the button',
              'Boolean',
              'false'
            ],
            [
              'size',
              'set the width of button, for icon button set both width and height',
              'String, Number',
              '-'
            ],
            [
              'round',
              'round button with border radius',
              'Boolean',
              'false'
            ],
            [
              'float',
              'make a drop shadow',
              'Boolean',
              'false'
            ],
            [
              'small',
              'small button',
              'Boolean',
              'false'
            ],
            [
              'large',
              'large button',
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
