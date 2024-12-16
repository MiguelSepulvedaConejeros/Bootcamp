<template>
    <div class="general" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
      <ul class="nav" style="background-color: yellow;">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/personajes" class="nav-link">Personajes</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contacto" class="nav-link">Contacto</router-link>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        imageUrl:'https://brandemia.org/contenido/subidas/2021/05/portada-starwars-imagenes-brandemia-blog-1000x670.jpg'
      }
    }
  }
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.nav{
text-align: left;
}
.nav-item{
margin: 5px;
font-size: 35px;
list-style: none;
display: inline-block;
}
.nav-link{
  text-decoration: none;
}
.general{
background-color: black;
width: 100%;
height: 100%;
position: absolute;
background-repeat: no-repeat; 
background-size: cover; 
background-position: center; 
width: 100%;
height: 100vh;
}
.img_starwars{
position:absolute;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
}
</style>