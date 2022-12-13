<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button slot="start" routerLink="/">
            <ion-icon :src="getIcon('arrowBack')"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Employee Form</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>
        <ion-label position="floating">Nom de l'employee</ion-label>
        <ion-input
          type="text"
          @ionChange="e => nom=e.target.value"/>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Prenom de l'employee</ion-label>
        <ion-input
          type="text"
          @ionChange="e => prenom=e.target.value"/>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Numero matricule</ion-label>
        <ion-input
          type="text"
          @ionChange="e => matricule=e.target.value"/>
      </ion-item>
      <ion-list>
        <ion-item>
          <ion-select placeholder="Selectionnez le niveau d'instruction" :multiple="false">
            <ion-select-option value="apples">Apples</ion-select-option>
            <ion-select-option value="oranges">Oranges</ion-select-option>
            <ion-select-option value="bananas">Bananas</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>
      <ion-button expand="block" @click="ajouter">
        Ajouter
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script>

export default {
  data(){
    return {
      nom:"",
      prenom:"",
      matricule:"",
      niveaux: this.$store.state.niveaux
    }
  },
  methods:{
    ajouter(){

    }
  }
}
</script>