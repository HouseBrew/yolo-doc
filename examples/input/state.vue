<template>
  <div>
    <h4>Disabled</h4>
    <vi-input :line="line" :disabled="true" value="This is disabled" prefix-icon="question-circular"/>
    <vi-input-error :requirements="requirements"/>

    <h4>Readonly</h4>
    <vi-input :line="line" readonly value="This is read only"/>

    <h4>Clickable</h4>
    <vi-input :line="line" clickable placeholder="Enter some text here"/>

    <h4>Error</h4>
    <vi-input :line="line" :error="true" placeholder="Enter some text here"/>
  </div>
</template>
