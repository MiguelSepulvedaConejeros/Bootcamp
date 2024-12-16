<template>
  <div>
    <nav>
      <router-link to="/pop">Pop</router-link>
      <router-link to="/rap">Rap</router-link>
      <router-link to="/rock">Rock</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
