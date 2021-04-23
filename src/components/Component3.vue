<template>
  <div>
    <Component4/>
    <History/>
  </div>
</template>

<script>
import Component4 from "./Component4";
import History from "./History";

export default {
  name: "Component3",
  components : {
    History,
    Component4
  }
}
</script>

<style scoped>

</style>