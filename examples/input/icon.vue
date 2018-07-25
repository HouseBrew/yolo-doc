<template>
  <div>
    <vi-row>
      <vi-col xs6>
        <vi-input prefix-icon="question-circular" placeholder="Enter some text here"/>
        <vi-input placeholder="Enter some text here" class="mt-16">
          <vi-button lowercase slot="prepend">Verify Email</vi-button>
        </vi-input>
      </vi-col>
      <vi-col xs6>
        <vi-input suffix-icon="question-circular" placeholder="Enter some text here"/>
        <vi-input placeholder="Enter some text here" class="mt-16">
          <vi-button text color="brand" lowercase slot="append">Verify Email</vi-button>
        </vi-input>
      </vi-col>
    </vi-row>

    <vi-row>
      <vi-col xs6>
        <vi-input line prefix-icon="question-circular" placeholder="Enter some text here"/>
        <vi-input line placeholder="Enter some text here" class="mt-16">
          <vi-button color="brand" lowercase slot="prepend">Verify Email</vi-button>
        </vi-input>
      </vi-col>
      <vi-col xs6>
        <vi-input line suffix-icon="question-circular" placeholder="Enter some text here"/>
        <vi-input line placeholder="Enter some text here" class="mt-16">
          <vi-button text color="brand" lowercase slot="append">Verify Email</vi-button>
        </vi-input>
      </vi-col>
    </vi-row>
  </div>
</template>
