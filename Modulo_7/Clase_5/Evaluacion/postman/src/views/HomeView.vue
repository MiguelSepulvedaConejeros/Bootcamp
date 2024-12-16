<template>
  <div class="container">
  <h1>Lista de Usuarios</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
              {{ user.name }} - {{ user.email }}
      </li>
    </ul>
    
    <h2>Datos del Usuario 1</h2>
    <div v-if="user1">
      <p><strong>Nombre:</strong> {{ user1.name }}</p>
      <p><strong>Email:</strong> {{ user1.email }}</p>
      <p><strong>Teléfono:</strong> {{ user1.phone }}</p>
    </div>
    <h2>Datos del Usuario 2</h2>
    <div v-if="user2">
      <p><strong>Nombre:</strong> {{ user2.name }}</p>
      <p><strong>Email:</strong> {{ user2.email }}</p>
      <p><strong>Teléfono:</strong> {{ user2.phone }}</p>
    </div>
    <h2>Datos del Usuario 3</h2>
    <div v-if="user3">
      <p><strong>Nombre:</strong> {{ user3.name }}</p>
      <p><strong>Email:</strong> {{ user3.email }}</p>
      <p><strong>Teléfono:</strong> {{ user3.phone }}</p>
    </div>
    <h2>Datos del Usuario 4</h2>
    <div v-if="user4">
      <p><strong>Nombre:</strong> {{ user4.name }}</p>
      <p><strong>Email:</strong> {{ user4.email }}</p>
      <p><strong>Teléfono:</strong> {{ user4.phone }}</p>
    </div>
    <h2>Datos del Usuario 5</h2>
    <div v-if="user5">
      <p><strong>Nombre:</strong> {{ user5.name }}</p>
      <p><strong>Email:</strong> {{ user5.email }}</p>
      <p><strong>Teléfono:</strong> {{ user5.phone }}</p>
    </div>
    <h2>Datos del Usuario 6</h2>
    <div v-if="user6">
      <p><strong>Nombre:</strong> {{ user6.name }}</p>
      <p><strong>Email:</strong> {{ user6.email }}</p>
      <p><strong>Teléfono:</strong> {{ user6.phone }}</p>
    </div>
</div>
</template>

<script lang="js">
import axios from 'axios';
export default {
    name: 'HomeView',
    data() {
      return {
      users: [],
      user1: null,
      user2: null,
      user3: null,
      user4: null,
      user5: null,
      user6: null,
    }},
    mounted() {
    // Obtener todos los usuarios
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.users = response.data;
      })
      .catch(error => console.error(error));

      axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        this.user1 = response.data;
      })
      .catch(error => console.error(error));

    // Obtener el usuario 6
    axios.get('https://jsonplaceholder.typicode.com/users/2')
      .then(response => {
        this.user2 = response.data;
      })
      .catch(error => console.error(error));

      axios.get('https://jsonplaceholder.typicode.com/users/3')
      .then(response => {
        this.user3 = response.data;
      })
      .catch(error => console.error(error));

    // Obtener el usuario 6
    axios.get('https://jsonplaceholder.typicode.com/users/4')
      .then(response => {
        this.user4 = response.data;
      })
      .catch(error => console.error(error));

      axios.get('https://jsonplaceholder.typicode.com/users/5')
      .then(response => {
        this.user5 = response.data;
      })
      .catch(error => console.error(error));

    // Obtener el usuario 6
    axios.get('https://jsonplaceholder.typicode.com/users/6')
      .then(response => {
        this.user6 = response.data;
      })
      .catch(error => console.error(error));
  }
}
</script>

<style scoped>
.container{
  background-image: url('https://assets.easymailing.com/cms/2023/03/17165700/envio-de-correos-masivos-detalle.jpg');
  background-size: cover;
}
li{
  list-style-type:none;
}
</style>