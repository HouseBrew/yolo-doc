<template>
  <div>
    <div class="box">
      <vi-item height="60">
        <vi-item-avatar class="pr-8">
          <vi-avatar size="36" src="https://api.adorable.io/avatars/285/me"/>
        </vi-item-avatar>
        <vi-item-content>
          <div class="vi-item__title">Joyce</div>
          <div class="vi-item__sub-title">Kay2097</div>
        </vi-item-content>
        <vi-item-action>
          <vi-checkbox v-model="selected" option-value="1"/>
        </vi-item-action>
      </vi-item>
      <vi-item height="60">
        <vi-item-avatar class="pr-8">
          <vi-avatar size="36" src="https://api.adorable.io/avatars/285/me"/>
        </vi-item-avatar>
        <vi-item-content>
          <div class="vi-item__title">Ken Chan</div>
          <div class="vi-item__sub-title">Kay2097</div>
        </vi-item-content>
        <vi-item-action>
          <vi-checkbox v-model="selected" option-value="2"/>
        </vi-item-action>
      </vi-item>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selected: []
      }
    }
  }
</script>
