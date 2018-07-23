<template>
  <div>
    <div>
      <vi-button disabled fill color="grey" small>Disabled</vi-button>
      <vi-button fill color="grey" small>Light Grey</vi-button>
      <vi-button fill color="blue">Blue</vi-button>
      <vi-button fill color="green" large>Green</vi-button>
    </div>

    <div>
      <vi-button disabled fill icon color="grey" small>
        <vi-icon name="star" size="12"/>
      </vi-button>
      <vi-button fill icon color="grey" small>
        <vi-icon name="star" size="12"/>
      </vi-button>
      <vi-button fill icon color="blue">
        <vi-icon name="star" size="12"/>
      </vi-button>
      <vi-button fill icon color="green" large>
        <vi-icon name="star" size="16"/>
      </vi-button>
    </div>
  </div>
</template>

<style scoped lang="stylus">
  .vi-button
    margin-right 10px
</style>
