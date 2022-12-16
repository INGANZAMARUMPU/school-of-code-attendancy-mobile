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
      <Employee
        v-for="employee in employees"
        :item="employee"/>
      <ion-fab-button routerLink="/form-employee">
        <ion-icon :icon="getIcon('addOutline')"/>
      </ion-fab-button>
    </ion-content>
    <FormNiveau
      :active="niveaux_shown"
      @ugara="niveaux_shown=false"/>
  </ion-page>
</template>

<script>
import FormNiveau from "../components/niveau"
import Employee from "../components/employee"

export default {
  components: { FormNiveau, Employee },
  data(){
    return {
      niveaux_shown:false,
      employees:[
        {
          "nom": "NKURUNZIZA",
          "prenom": "Jonathan",
          "matricule": "96",
          "niveau": {
              "nom": "BAC III",
              "poid": 10
          }
        }
      ]
    }
  },
  methods:{
    addNiveau(){
      this.niveaux_shown = true
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