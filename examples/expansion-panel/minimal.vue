<template>
  <div>
    <vi-expansion-panel :minimal="true" class="read-more-example">
      <vi-button slot="header" slot-scope="slot" text>
        Read more <vi-icon size="10" right name="right" :rotate90="slot.isActive"></vi-icon>
      </vi-button>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur delectus dignissimos earum, enim esse ipsum labore laborum minus mollitia obcaecati, optio possimus quaerat quas qui, quis sapiente tempore veritatis!
    </vi-expansion-panel>
  </div>
</template>
