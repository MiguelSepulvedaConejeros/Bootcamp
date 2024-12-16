<template>
  <form>
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" />
    </div>
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" />
    </div>
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" />
    </div>
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" />
    </div>
  </form>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
