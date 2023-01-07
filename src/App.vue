<template>
  <ion-app>
    <ion-router-outlet v-if="$store.state.user != null"/>
    <Login v-else/>
  </ion-app>
</template>
<script>
import Login from "./views/Login"
export default {
  components:{ Login },
  watch:{
    "$store.state.user"(new_val){
      window.localStorage["rh_user"] = JSON.stringify(new_val)
    }
  },
  mounted(){
    this.$store.state.user = JSON.parse(window.localStorage["rh_user"])
  }
}
</script>
<style src="./style.css">
</style>