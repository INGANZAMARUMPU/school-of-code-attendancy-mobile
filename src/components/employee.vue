<template>
  <div class="parent">
    <div>
      <ion-icon
        class="icon"
       :src="getIcon('personCircleOutline')"/>
    </div>
    <div class="details">
      <div>{{ item.nom }}</div>
      <div>{{ item.prenom }}</div>
      <div>No. Matricule {{ item.matricule }}, {{ item.niveau.nom }}</div>
    </div>
    <div>
      <ion-button
        fill=clear>
        <ion-icon :src="getIcon('checkmarkOutline')"/>
      </ion-button>
      <ion-button
        color=danger
        fill=clear>
        <ion-icon :src="getIcon('closeCircleOutline')"/>
      </ion-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"]
}
</script>
<style scoped>
.parent{
  display: flex;
  align-items: center;
  margin: 5px 0;
}
.details{
  flex-grow: 1;
  margin-left: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
}
.icon{
  font-size: 4em;
}
</style>
