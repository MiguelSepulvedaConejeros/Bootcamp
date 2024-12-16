<template>
    <v-app>
        <v-main>
            <div class="heroes-background">
                <div class="background-blur"></div>
                <v-container class="content">
                    <h1 class="display-1 text-center white--text">Héroes</h1>
                    <v-row justify="center" class="my-4">
                        <i class="fas fa-shield-alt"></i>
                        <i class="fas fa-crosshairs"></i>
                        <i class="fas fa-plus"></i>
                        <i class="fas fa-sword"></i>
                        <i class="fas fa-caret-up"></i>
                        <i class="fas fa-hand-paper"></i>
                    </v-row>

                    <v-simple-table>
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Función</th>
                                <th>Título</th>
                                <th>Ataque</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="hero in heroes" :key="hero.name">
                                <td><img :src="hero.image" :alt="hero.name" class="hero-image"></td>
                                <td>{{ hero.name }}</td>
                                <td>{{ hero.role }}</td>
                                <td>{{ hero.title }}</td>
                                <td>{{ hero.attack }}</td>
                            </tr>
                        </tbody>
                    </v-simple-table>
                    <v-btn color="orange darken-3" @click="$router.push('/')">Volver al Home</v-btn>
                </v-container>
            </div>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'HeroesView',
    data: () => ({
        heroes: [
            {
                name: 'Artanis',
                role: 'Agresor',
                title: 'Jerarca de los Daelaam',
                attack: 111,
                image: 'https://static.heroesofthestorm.com/heroes/yrel/skins/light-of-hope-800.jpg',
            },
            {
                name: 'D.va',
                role: 'Guerrero',
                title: 'Piloto de Meka',
                attack: '22(meca) - 55(piloto)',
                image: 'https://static.heroesofthestorm.com/heroes/dva/skins/meka-pilot-800.jpg',
            },
            {
                name: 'Ragnaros',
                role: 'Agresor',
                title: 'El Señor del fuego',
                attack: '180',
                image: 'https://static.heroesofthestorm.com/heroes/ragnaros/skins/the-firelord-800.jpg',
            },
            {
                name: 'Yrel',
                role: 'Guerrero',
                title: 'Luz de la esperanza',
                attack: '155',
                image: 'https://static.heroesofthestorm.com/heroes/yrel/skins/light-of-hope-800.jpg',
            },
            {
                name: 'Ana',
                role: 'Guerrero',
                title: 'Francotiradora veterana',
                attack: '30',
                image: 'https://static.heroesofthestorm.com/heroes/ana/skins/veteran-sniper-800.jpg',
            },
            {
                name: 'Auriel',
                role: 'Sanadora',
                title: 'Arcángel de la esperanza',
                attack: '64',
                image: 'https://static.heroesofthestorm.com/heroes/ana/skins/veteran-sniper-800.jpg',
            },
            {
                name: 'Malfurion',
                role: 'Sanadora',
                title: 'Archidruida',
                attack: '60',
                image: 'https://static.heroesofthestorm.com/heroes/malfurion/skins/archdruid-800.jpg',
            },
            {
                name: 'Arthas',
                role: 'Tanque',
                title: 'El rey Exánime',
                attack: '95',
                image: 'https://static.heroesofthestorm.com/heroes/arthas/skins/the-lich-king-800.jpg',
            },
            {
                name: 'Johanna',
                role: 'Tanque',
                title: 'Cruzada de Zakarum',
                attack: '99',
                image: 'https://static.heroesofthestorm.com/heroes/johanna/skins/crusader-of-zakarum-800.jpg',
            },
            {
                name: 'Muradin',
                role: 'Tanque',
                title: 'Rey de la montaña',
                attack: '88',
                image: 'https://static.heroesofthestorm.com/heroes/muradin/skins/mountain-king-800.jpg',
            },
            {
                name: 'Illidan',
                role: 'Asesino cuerpo a cuerpo',
                title: 'El traidor',
                attack: '87',
                image: 'https://static.heroesofthestorm.com/heroes/illidan/skins/the-betrayer-800.jpg',
            },
            {
                name: 'Maiev',
                role: 'Asesino cuerpo a cuerpo',
                title: 'La celadora',
                attack: '145',
                image: 'https://static.heroesofthestorm.com/heroes/maiev/skins/the-warden-800.jpg',
            },
            {
                name: 'Zeratul',
                role: 'Asesino cuerpo a cuerpo',
                title: 'Prelado tétrico',
                attack: '131',
                image: 'https://static.heroesofthestorm.com/heroes/zeratul/skins/dark-prelate-800.jpg',
            },
            {
                name: 'Abathur',
                role: 'Apoyo',
                title: 'Maestro de evolución',
                attack: '27',
                image: 'https://static.heroesofthestorm.com/heroes/abathur/skins/evolution-master-800.jpg',
            },
            {
                name: 'Medivh',
                role: 'Apoyo',
                title: 'El ultimo guardián',
                attack: '83',
                image: 'https://www.hellofriki.com/wp-content/uploads/2016/05/medivh.jpg',
            },
            {
                name: 'Zarya',
                role: 'Apoyo',
                title: 'Defensora de Rusia',
                attack: '22',
                image: 'https://static.heroesofthestorm.com/heroes/zarya/skins/defender-of-russia-800.jpg',
            },
            {
                name: 'Nazeebo',
                role: 'Asesino a distancia',
                title: 'Médico brujo',
                attack: '92',
                image: 'https://static.heroesofthestorm.com/heroes/nazeebo/skins/heretic-witch-doctor-800.jpg',
            },
            {
                name: 'Genji',
                role: 'Asesino a distancia',
                title: 'Ninja cibernético',
                attack: '44',
                image: 'https://static.heroesofthestorm.com/heroes/genji/skins/cybernetic-ninja-800.jpg',
            },
            {
                name: 'Zagara',
                role: 'Asesino a distancia',
                title: 'Madre de la prole del enjambre',
                attack: '85',
                image: 'https://static.heroesofthestorm.com/heroes/zagara/skins/broodmother-of-the-swarm-800.jpg',
            },
        ],
    }),
};
</script>

<style scoped>
.heroes-background {

    overflow: hidden;
}

.background-blur {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://static.heroesofthestorm.com/heroes/yrel/skins/light-of-hope-800.jpg') no-repeat center center fixed;
    background-size: cover;
    filter: blur(8px);
    z-index: 1;
    /* Asegúrate de que el fondo esté detrás */
}

.content {
    position: relative;
    z-index: 2;
    /* Asegúrate de que el contenido esté por encima del fondo */
    color: white;
    /* Cambia el color del texto si es necesario */
}

.hero-image {
    width: 100px;
    height: auto;
}
i{
    padding: 10px;
    color: gray;
    scale: 1.5;
}
</style>