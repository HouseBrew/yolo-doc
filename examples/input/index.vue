<template>
  <div>
    <h3>Default</h3>
    <vi-input :line="line" placeholder="Enter some text here"/>
    <vi-input-error>Email invalid</vi-input-error>

    <h3>Input with button</h3>
    <vi-input :line="line" placeholder="Enter some text here">
      <vi-button text color="brand" lowercase slot="append">Verify Email</vi-button>
    </vi-input>
  </div>
</template>
