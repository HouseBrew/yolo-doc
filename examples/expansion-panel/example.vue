<template>
  <div class="drawer">
    <vi-expansion-panel :minimal="true">
      <vi-item :link="true" dark slot="header" slot-scope="slot">
        <vi-item-content>
          Subscriptions
        </vi-item-content>
        <vi-item-action>
          <vi-icon size="10" name="down" :rotate180="slot.isActive"></vi-icon>
        </vi-item-action>
      </vi-item>
      <vi-item :link="true" dark>Cart</vi-item>
      <vi-item :link="true" dark>Cart</vi-item>
      <vi-item :link="true" dark>Cart</vi-item>
    </vi-expansion-panel>
    <vi-item :link="true" dark>hi</vi-item>
    <vi-item :link="true" dark>sdf</vi-item>
    <vi-item :link="true" dark>fadsfsadf</vi-item>
  </div>
</template>
