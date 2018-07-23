<template>
  <div>
    <vi-row>
      <vi-col xs4>
        <vi-card>
          <vi-item :link="true">1987</vi-item>
          <vi-item :link="true">1987</vi-item>
          <vi-item :link="true">1987</vi-item>
        </vi-card>
      </vi-col>

      <vi-col xs4>
        <vi-card>
          <vi-item :link="true" class="pr-4">
            <vi-item-content>Item A</vi-item-content>
            <vi-item-action>
              <vi-button icon text>
                <vi-icon size="18" name="info-circular"/>
              </vi-button>
            </vi-item-action>
          </vi-item>
          <vi-item :link="true" class="pr-4">
            <vi-item-content>Item B</vi-item-content>
            <vi-item-action>
              <vi-button icon text>
                <vi-icon size="18" name="info-circular"/>
              </vi-button>
            </vi-item-action>
          </vi-item>
          <vi-item :link="true" class="pr-4">
            <vi-item-content>Item C</vi-item-content>
            <vi-item-action>
              <vi-button icon text>
                <vi-icon size="18" name="info-circular"/>
              </vi-button>
            </vi-item-action>
          </vi-item>
        </vi-card>
      </vi-col>

      <vi-col xs4>
        <vi-card>
          <vi-item :link="true">
            <vi-item-avatar>
              <vi-icon name="edit"/>
            </vi-item-avatar>
            <vi-item-content>
              Edit item
            </vi-item-content>
          </vi-item>
          <vi-item :link="true">
            <vi-item-avatar>
              <vi-icon name="copy"/>
            </vi-item-avatar>
            <vi-item-content>
              Duplicage item
            </vi-item-content>
          </vi-item>
          <vi-item :link="true">
            <vi-item-avatar>
              <vi-icon name="trash"/>
            </vi-item-avatar>
            <vi-item-content>
              Delete item
            </vi-item-content>
          </vi-item>
        </vi-card>
      </vi-col>
    </vi-row>
  </div>
</template>
