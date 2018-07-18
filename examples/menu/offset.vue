<template>
  <vi-menu min-width="170" :offsetY="false" :offsetX="true">
    <vi-button slot="activator">Offset menu</vi-button>
    <vi-item :link="true">
      <vi-item-avatar>
        <vi-icon width="25" height="25" name="config"/>
      </vi-item-avatar>
      Setting
    </vi-item>
  </vi-menu>
</template>
