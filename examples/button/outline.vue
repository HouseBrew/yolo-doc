<template>
  <div>

    <vi-row align-center>
      <vi-col xs4>
        <p>Default (Primary)</p>
        <vi-button icon outline>
          <vi-icon name="share"/>
        </vi-button>
        <vi-button outline>
          Cancel
        </vi-button>
      </vi-col>

      <vi-col xs4>
        <p>Secondary</p>
        <vi-button icon outline="secondary">
          <vi-icon name="share"/>
        </vi-button>
        <vi-button outline="secondary">
          Cancel
        </vi-button>
      </vi-col>

      <vi-col xs4>
        <p>Tertiary</p>
        <vi-button icon outline="tertiary">
          <vi-icon name="share"/>
        </vi-button>
        <vi-button outline="tertiary">
          Cancel
        </vi-button>
      </vi-col>

    </vi-row>
    <div class="ex-row mt-16">



    </div>

    <p>With Colors</p>
    <div class="ex-row">
      <vi-button disabled outline color="grey" small>Disabled</vi-button>
      <vi-button outline color="brand" small>Primary</vi-button>
      <vi-button outline color="red" small>Red</vi-button>
      <vi-button outline color="blue">Blue</vi-button>
      <vi-button outline color="green" large>Green</vi-button>
    </div>

    <div class="ex-row">
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
