<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Employées</ion-title>
        <ion-buttons slot="secondary">
          <ion-button id="menu-toggler">
            <ion-icon slot="icon-only"
              :ios="getIcon('ellipsisHorizontal')"
              :md="getIcon('ellipsisVertical')"/>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
    </ion-content>
  </ion-page>
</template>

<script>

export default {
}
</script>