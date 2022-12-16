<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button slot="start" routerLink="/">
            <ion-icon :src="getIcon('arrowBack')"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>{{ nom }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <Presence
        v-for="presence in 5"
        :item="presence"/>
    </ion-content>
  </ion-page>
</template>

<script>
import Presence from "../components/presence"

export default {
  components:{ Presence },
  data(){
    return {
      nom:"PRESENCES"
    }
  },
  mounted(){
    this.nom = this.$route.params["nom"]
  }
}
</script>