<template>
  <ion-page>
    <ion-col>
      <div class="center">
        <ion-item>
          <ion-label position="floating">Username</ion-label>
          <ion-input
            type="text"
            @ionChange="e => username=e.target.value"
            placehodler="Nom d'utilisateur"/>
        </ion-item>
        <ion-item>
          <ion-label position="floating">password</ion-label>
          <ion-input
            type="password"
            @ionChange="e => password=e.target.value"
            placehodler="mot de passe"/>
        </ion-item>
        <ion-button expand="block" @click="seConnecter">
          Connexion
        </ion-button>
      </div>
    </ion-col>
  </ion-page>
</template>

<script>

export default {
  data(){
    return {
      username:"",
      password: ""
    }
  },
  methods:{
    seConnecter(){
      let logins = {
        username: this.username,
        password: this.password
      }
      console.log("network request")
      
      axios.post(this.$store.state.base_url+"/login/", logins)
      .then((response) => {
        this.$store.state.user = response.data
      }).catch((error) => {
        console.log("-----------", error)
      })
    }
  }
}
</script>
<style scoped>
.center{
  margin-top: 30%;
  padding: 20px;
}
</style>