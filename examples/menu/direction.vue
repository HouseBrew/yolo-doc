<template>
  <vi-row>
    <vi-menu top :nudge-top="10">
      <vi-button slot="activator">Top</vi-button>
      <vi-item :link="true">
        <vi-item-avatar>
          <vi-icon width="25" height="25" name="config"/>
        </vi-item-avatar>
        Setting
      </vi-item>
    </vi-menu>

    <vi-menu left :nudge-bottom="10" class="ml-10">
      <vi-button slot="activator">Left</vi-button>
      <vi-item :link="true">
        <vi-item-avatar>
          <vi-icon width="25" height="25" name="config"/>
        </vi-item-avatar>
        Setting
      </vi-item>
    </vi-menu>

    <vi-menu top left :nudge-top="10" class="ml-10">
      <vi-button slot="activator">Top Left</vi-button>
      <vi-item :link="true">
        <vi-item-avatar>
          <vi-icon width="25" height="25" name="config"/>
        </vi-item-avatar>
        Setting
      </vi-item>
    </vi-menu>
  </vi-row>
</template>
