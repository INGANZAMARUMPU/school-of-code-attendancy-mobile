<template>
  <div class="parent" v-if="active">
    <div class="body">
      <h3>Niveau</h3>
      <div class="items">
        <ion-item>
          <ion-label position="floating">Nom</ion-label>
          <ion-input
            type="text"
            @ionChange="e => nom=e.target.value"
            placehodler="Nom d'utilisateur"/>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Poids</ion-label>
          <ion-input
            type="number"
            @ionChange="e => poid=e.target.value"
            placehodler="Nom d'utilisateur"/>
        </ion-item>
        <div class="buttons">
          <ion-button fill="clear" color="danger" @click="close">
            annuler
          </ion-button>
          <ion-button @click="creerNiveau">
            Ajouter
          </ion-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: { type: Boolean, required:true}
  },
  data(){
    return {
      nom:'',
      poids:0
    }
  },
  methods:{
    close(){
      this.$emit("ugara")
    },
    creerNiveau(){
      let niveau = {
        nom: this.nom,
        poids: this.poids
      }
      this.$store.state.niveaux.push(niveau)
      this.close()
    }
  }
}
</script>
<style scoped>
.parent{
  position: fixed;
  background-color: #0005;
  width: 100%;
  height: 100%;
  z-index: 10;
}
.body{
  position: relative;
  width: 60%;
  background-color: white;
  margin: 30% auto;
}
.items{
  padding: 0 10px 10px 10px;
}
.buttons{
  display: flex;
  justify-content: space-between;
}
h3{
  text-align: center;
  border-bottom: 2px solid lightgray;
  padding: 10px;
  background-color: #F5F5F5;
}
</style>
