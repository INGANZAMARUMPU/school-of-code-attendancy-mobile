<template>
  <div class="parent">
    <div>{{ new Date().toLocaleDateString() }}</div>
    <div class="present" v-if="isPresent()">
      present
    </div>
    <div class="absent" v-else>
      absent
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    isPresent(){
      let bool = Math.random()*10 > 5
      return bool
    }
  }
}
</script>
<style scoped>
.parent{
  display: flex;
  justify-content: space-between;
  padding: 10px 5px;
}
.parent:has(.absent){
  background-color: #fdd9;
}
.present{
  color: green;
}
.absent{
  color: red;
}
</style>
