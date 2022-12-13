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
      <ion-popover trigger="menu-toggler" dismiss-on-select="true" show-backdrop="false">
        <ion-content>
          <ion-list lines="none">
            <ion-item button @click="addNiveau">
              <ion-label>Niveau</ion-label>
              <ion-icon :src="getIcon('listOutline')"/>
            </ion-item>
            <ion-item button @click="logOut">
              <ion-label>Deconnexion</ion-label>
              <ion-icon :src="getIcon('powerOutline')"/>
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-popover>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-fab-button routerLink="/form-employee">
        <ion-icon :icon="getIcon('addOutline')"/>
      </ion-fab-button>
    </ion-content>
  </ion-page>
</template>

<script>

export default {
  methods:{
    addNiveau(){
      alert("Not yet implemented")
    },
    logOut(){
      this.$store.state.user = null
    }
  }
}
</script>
<style scoped>
ion-fab-button{
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>