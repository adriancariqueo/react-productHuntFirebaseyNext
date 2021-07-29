export default function validarCrearCuenta(valores){
    let errores = {}

    //validar el nombre del usuario
    if(!valores.nombre) {
        errores.nombre = "El Nombre es obligatorio";
    }

    //Validar el email
    if(!valores.email) {
        errores.email = "El Email es Obligatorio";
    }
}