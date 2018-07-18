<template>
  <div>
    <h2>Default</h2>
    <vi-no-data icon="search" title="No results found" content="There were no members that matched your search."/>

    <h2>Custom Slot</h2>
    <vi-no-data icon="star" title="No inactive account">
      <template>
        <a class="no-data-link" href="/">Invite</a> members to your organization now
      </template>
    </vi-no-data>

    <h2>Without icon</h2>
    <vi-no-data title="No results found" content="There were no members that matched your search."/>

    <h2>Smaller</h2>
    <vi-no-data small icon-size="65" icon="search" title="No results found" content="There were no members that matched your search."/>
  </div>
</template>
