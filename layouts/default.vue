<template>
  <div>
    <div class="topbar">Yolo</div>
    <div class="sidebar">
      <nuxt-link tag="li" to="/avatar"><vi-item link="true">Avatar</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/button"><vi-item link="true">Button</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/checkbox"><vi-item link="true">Checkbox</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/chip"><vi-item link="true">Chip</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/data-table"><vi-item link="true">Datatable</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/date-picker"><vi-item link="true">Date Picker</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/dialog"><vi-item link="true">Dialog</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/drawer"><vi-item link="true">Drawer</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/expansion-panel"><vi-item link="true">Expansion Panel</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/grid"><vi-item link="true">Grid</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/icon"><vi-item link="true">Icon</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/input"><vi-item link="true">Input</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/item"><vi-item link="true">Item</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/menu"><vi-item link="true">Menu</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/message"><vi-item link="true">Message</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/message-box"><vi-item link="true">MessageBox</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/no-data"><vi-item link="true">No Data</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/tooltip"><vi-item link="true">Tooltip</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/section-header"><vi-item link="true">Section header</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/select"><vi-item link="true">Select</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/sticky"><vi-item link="true">Sticky</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/switch"><vi-item link="true">Switch</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/sidebar"><vi-item link="true">Sidebar</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/spinner"><vi-item link="true">Spinner</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/tabs"><vi-item link="true">Tabs</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/preview"><vi-item link="true">Preview</vi-item></nuxt-link>
      <nuxt-link tag="li" to="/loading-dots"><vi-item link="true">Loading Dots</vi-item></nuxt-link>
    </div>
    <main style="margin-top: 60px">
      <nuxt/>
    </main>

  </div>
</template>


<style lang="stylus">
  @import '../assets/stylus/main.styl'
  body
    background #f9f9f9

  .topbar
    background #f1bc1a
    height 50px
    color white
    align-items center
    display flex
    padding 0 20px
    font-weight bold
    position fixed
    left 0
    top 0
    right 0
    z-index: 2;

  .sidebar
    position: fixed;
    left: 0;
    top: 50px;
    bottom: 0;
    width: 200px;
    border-right: 1px solid #e1e1e1
    background white

  main
    top: 50px;
    margin-left: 200px;
    padding 20px

  .ex-row
    display flex

  .ex-row > *:not(:first-child)
    margin-left 20px
</style>
