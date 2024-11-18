<template>
  <div class="general">
    <ul class="nav" style="background-color: yellow;">
      <li class="nav-item">
        <a router-link to="/home" class="nav-link">Inicio</a>
      </li>
      <li class="nav-item">
        <router-link to="/personajes" class="nav-link">Personajes</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/contacto" class="nav-link">Contacto</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
</script>

<style scoped>
*{
margin: 0;
padding: 0;
}
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
}

#nav{
padding: 30px;

}

#nav a {
font-weight: bold;
color: #2c3e50;
}

#nav a.router-link-exact-active{
color: #42b983;
}

.nav-item{
margin: 5px;
font-size: 35px;
list-style: none;
display: inline-block;
}
.nav{
text-align: left;
}
.general{
background-color: black;
width: 100%;
height: 100%;
position: absolute;
background-image: url('https://brandemia.org/contenido/subidas/2021/05/portada-starwars-imagenes-brandemia-blog-1000x670.jpg');
background-repeat: no-repeat; 
background-size: cover; 
background-position: center; 
width: 100%;
height: 100vh;
}
</style>