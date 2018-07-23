<template>
  <div>
    <div>
      <vi-chip small text>
        <vi-icon name="done" color="green" size="10"/> Verified
      </vi-chip>

      <vi-chip small text>
        <vi-icon name="remove-circular" color="red" size="10"/> Unverified
      </vi-chip>

      <vi-chip small text color="brand">
        <vi-icon name="clear" color="brand" size="10"/> Removed
      </vi-chip>
    </div>

    <div class="mt-16">
      <vi-chip text>
        <vi-icon name="done" color="green" size="10"/> Verified
      </vi-chip>

      <vi-chip text>
        <vi-icon name="remove-circular" color="red" size="10"/> Unverified
      </vi-chip>

      <vi-chip text color="brand">
        <vi-icon name="clear" color="brand" size="10"/> Removed
      </vi-chip>
    </div>
  </div>
</template>

<style scoped lang="stylus">
  .vi-chip
    margin-right 16px
</style>
