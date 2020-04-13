<template>
  <div id="app">
    <Contact/>
  </div>
</template>

<script>
// import db from "@/db.js";
import Contact from"@/components/Contact"
export default{
  components:{
    Contact
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>