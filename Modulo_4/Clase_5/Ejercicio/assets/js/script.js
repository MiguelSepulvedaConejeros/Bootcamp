//object
function Usuario(nombre, trabajo, correo, telefono, bio) {
    this.name = nombre;
    this.work = trabajo;
    this.phone = telefono;
    this.email = correo;
    this.about = bio;

}

function presentar(event) {
    
    event.preventDefault();
    //Obtener datos
    var nombre = document.getElementById('name').value;
    var trabajo = document.getElementById('work').value;
    var correo = document.getElementById('email').value;
    var telefono = document.getElementById('phone').value;
    var bio = document.getElementById('bio').value;

    //Crear nuevo objeto usuario
    var newUser = new Usuario(nombre, trabajo, correo, telefono, bio);
    console.log(newUser)

    //llenar los elementos html desde el objeto nuevo.
    document.getElementById('nombre').innerHTML = newUser.name;
    document.getElementById('trabajo').innerHTML = newUser.work;
    document.getElementById('correo').innerHTML = newUser.email;
    document.getElementById('telefono').innerHTML = newUser.phone;
    document.getElementById('sobreMi').innerHTML = newUser.about;

}
