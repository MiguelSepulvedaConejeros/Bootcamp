<template>
    <section>
        <h3>Añadir Profesor</h3>
        <div><label>Nombre:</label><input type="text" v-model="teacher.teacherName"></div>
        <div><label>Apellidos:</label><input type="text" v-model="teacher.surname"></div>
        <div><label>DNI / NIF:</label><input type="text" v-model="teacher.dni"></div>
        <div><label>Materias:</label><input type="text" v-model="subject"><button @click="handleSubject">Agregar</button></div>
        <div>
            <ul>
                <li v-for="(elm, index) in teacher.subjects" :key="index">{{ elm }}</li>
            </ul>
        </div>
        <div><input type="checkbox" v-model="teacher.doc">Documentacion Entregada</div>
        <div><button @click="handleteacher">Agregar</button></div>
    </section>
    <section>
        <h3>Listado de profesores</h3>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>DNI / NIF</th>
                <th>Materias</th>
                <th>Documentacion Entregada</th>
            </tr>
            <tr v-for="elm in teachers" :key="elm.dni">
                <th>{{ elm.teacherName }}</th>
                <th>{{ elm.surname }}</th>
                <th>{{ elm.dni }}</th>
                <th>{{ elm.sub }}</th>
                <th>
                    <ul>
                        <li v-for="(item, index) in elm.subjects" :key="index">{{ item }}</li>
                    </ul>
                </th>
                <th v-if="elm.doc">Entregada</th>
                <th v-else>No Entregada</th>
            </tr>
        </table>
    </section>
</template>

<script lang="js" setup>
    import { ref } from 'vue'
    
    let teacher = ref({
        teacherName: '',
        surname: '',
        dni: '',
        subjects: [],
        doc: false
    })

    let teachers = ref([])

    let subject = ref('')

    const handleSubject = () => {
        teacher.value.subjects.push(subject.value)
        subject.value = ''
    }

    const handleteacher = () => {
        teachers.value.push({
            teacherName: teacher.value.teacherName,
            surname: teacher.value.surname,
            dni: teacher.value.dni,
            subjects: teacher.value.subjects ,
            doc: teacher.value.doc
        })
        teacher.value.teacherName = ""
        teacher.value.surname = ""
        teacher.value.dni = ""
        teacher.value.subjects = ""
        teacher.value.doc = false
    }
</script>

<style scoped>
</style>