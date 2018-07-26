<template>
  <div>
    <div class="ex-row">
      <vi-col xs4>
        <p>Default text button</p>
        <vi-button text>
          Text
        </vi-button>
        <vi-button icon text>
          <vi-icon name="share"/>
        </vi-button>
      </vi-col>
      <vi-col xs4>
        <p>Secondary text button</p>
        <vi-button text="secondary">
          Text
        </vi-button>
        <vi-button icon text="secondary">
          <vi-icon name="share"/>
        </vi-button>
      </vi-col>
    </div>

    <p class="mt-24">Colored text button</p>
    <div class="ex-row">
      <vi-button text color="brand">Brand</vi-button>
      <vi-button text color="blue">Blue</vi-button>
      <vi-button text color="green">Green</vi-button>
      <vi-button text color="red">Red</vi-button>
    </div>

    <div class="ex-row">
      <vi-button icon text color="brand"><vi-icon name="share"/></vi-button>
      <vi-button icon text color="blue"><vi-icon name="share"/></vi-button>
      <vi-button icon text color="green"><vi-icon name="share"/></vi-button>
      <vi-button icon text color="red"><vi-icon name="share"/></vi-button>
    </div>
  </div>
</template>
