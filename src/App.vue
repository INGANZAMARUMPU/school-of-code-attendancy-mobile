<template>
  <ion-app>
    <ion-router-outlet v-if="$store.state.user != null"/>
    <Login v-else/>
  </ion-app>
</template>
<script>
import Login from "./views/Login"
export default {
  components:{ Login }
}
</script>
<style src="./style.css">
</style>