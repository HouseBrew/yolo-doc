<template>
  <div>

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

<style>
  .sidebar {
    position: fixed;
    left: 0;
    top: 50px;
    bottom: 0;
    width: 200px;
  }
  main {
    margin-left: 200px;
  }
</style>
