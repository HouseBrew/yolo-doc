<template>
  <div>
    <p>Default</p>
    <vi-chip>
      Verified
    </vi-chip>

    <p>Prepend</p>
    <vi-chip prepend="Taxonomy">
      2 Selected
    </vi-chip>

    <vi-chip small text>
      <vi-icon name="done" color="green" size="10"/> Verified
    </vi-chip>

    <vi-chip small text>
      <vi-icon name="remove-circular" color="red" size="10"/> Unverified
    </vi-chip>

    <vi-chip small text color="brand">
      <vi-icon name="clear" color="brand" size="10"/> Removed
    </vi-chip>

    <vi-chip small color="brand">
      <vi-icon name="clear" color="brand" size="10"/> Removed
    </vi-chip>
  </div>
</template>
