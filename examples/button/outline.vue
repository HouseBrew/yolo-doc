<template>
  <div>
    <div>
      <vi-button disabled outline color="grey" small>Disabled</vi-button>
      <vi-button outline color="grey" small>Light Grey</vi-button>
      <vi-button outline color="brand" small>Primary</vi-button>
      <vi-button outline color="red" small>Red</vi-button>
      <vi-button outline color="blue">Blue</vi-button>
      <vi-button outline color="green" large>Green</vi-button>
    </div>

    <div>
      <vi-button disabled outline icon color="grey" small>
        <vi-icon name="star" size="12"/>
      </vi-button>
      <vi-button outline icon color="grey" small>
        <vi-icon name="star" size="12"/>
      </vi-button>
      <vi-button outline icon color="blue">
        <vi-icon name="star" size="12"/>
      </vi-button>
      <vi-button outline icon color="green" large>
        <vi-icon name="star" size="16"/>
      </vi-button>
    </div>
  </div>
</template>

<style scoped lang="stylus">
  .vi-button
    margin-right 10px
</style>
