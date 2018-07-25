<template>
  <vi-row wrap>
    <vi-col xs6>
      <p>Disabled</p>
      <vi-input :line="line" :disabled="true" value="This is disabled" prefix-icon="question-circular"/>
    </vi-col>
    <vi-col xs6>
      <p>Readonly</p>
      <vi-input :line="line" readonly value="This is read only"/>
    </vi-col>
    <vi-col xs6>
      <p>Clickable</p>
      <vi-input :line="line" clickable placeholder="Enter some text here"/>
    </vi-col>
    <vi-col xs6>
      <p>Error</p>
      <vi-input :line="line" :error="true" placeholder="Enter some text here"/>
    </vi-col>
  </vi-row>
</template>
