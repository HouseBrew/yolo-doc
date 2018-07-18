<template>
  <div>
    <div class="topbar">Yolo</div>
    <div class="sidebar">
      <nuxt-link tag="li" to="/avatar"><vi-item selectable>Avatar</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/button"><vi-item selectable>Button</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/checkbox"><vi-item selectable>Checkbox</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/chip"><vi-item selectable>Chip</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/data-table"><vi-item selectable>Datatable</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/date-picker"><vi-item selectable>Date Picker</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/dialog"><vi-item selectable>Dialog</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/drawer"><vi-item selectable>Drawer</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/expansion-panel"><vi-item selectable>Expansion Panel</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/grid"><vi-item selectable>Grid</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/icon"><vi-item selectable>Icon</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/input"><vi-item selectable>Input</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/item"><vi-item selectable>Item</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/menu"><vi-item selectable>Menu</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/message"><vi-item selectable>Message</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/message-box"><vi-item selectable>MessageBox</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/no-data"><vi-item selectable>No Data</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/tooltip"><vi-item selectable>Tooltip</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/section-header"><vi-item selectable>Section header</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/select"><vi-item selectable>Select</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/sticky"><vi-item selectable>Sticky</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/switch"><vi-item selectable>Switch</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/sidebar"><vi-item selectable>Sidebar</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/spinner"><vi-item selectable>Spinner</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/tabs"><vi-item selectable>Tabs</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/preview"><vi-item selectable>Preview</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/loading-dots"><vi-item selectable>Loading Dots</vi-item></nuxt-link>
    </div>
    <main>
      <nuxt/>
    </main>

  </div>
</template>

<style lang="stylus">
  // TODO: rm me
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');

  html {
    box-sizing: border-box;
    overflow-y: scroll; /* All browsers without overlaying scrollbars */
    -webkit-text-size-adjust: 100%; /* iOS 8+ */
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  ::before,
  ::after {
    text-decoration: inherit; /* Inherit text-decoration and vertical align to ::before and ::after pseudo elements */
    vertical-align: inherit;
  }

  /* Remove margin, padding of all elements and set background-no-repeat as default */
  * {
    background-repeat: no-repeat; /* Set `background-repeat: no-repeat` to all elements */
    padding: 0; /* Reset `padding` and `margin` of all elements */
    margin: 0;
  }

  html, body
    height: 100%
    min-height: 100%
    position: relative
    width: 100%
    font-family Lato, sans-serif
    background #eaeaea

  html
    font-size: $font-size-root
    text-rendering: optimizeLegibility
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
    overflow-x: hidden

  body
    font-family: $font-family
    line-height: $line-height-root
    margin 0

  header
    transition: .3s padding $transition
    width: 100%
    z-index: 1

  main
    transition: .3s padding $transition
    will-change: padding-left

  a
    color: inherit
    text-decoration: none

  ol, ul, li
    list-style: none

  img
    max-width: 100%

  ::-ms-clear
  ::-ms-reveal
    display: none

</style>

<style lang="stylus">
  .topbar
    background #414141
    height 50px
    color white

  .sidebar
    position: fixed;
    left: 0;
    top: 50px;
    bottom: 0;
    width: 200px;
    border-right: 1px solid #e1e1e1;

  main
    top: 50px;
    margin-left: 200px;
    padding 20px

</style>
