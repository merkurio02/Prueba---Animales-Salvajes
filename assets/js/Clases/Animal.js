class Animal {
    constructor(nombre, edad, img, comentario, sonido) {
        let Nombre = nombre;
        let Edad = edad;
        let Img = img;
        let Comentario = comentario;
        let Sonido = sonido;


        this.getNombre = () => Nombre;
        this.getEdad = () => Edad;
        this.getImg = () => Img;
        this.setComentarios = (comentario) => (Comentario = comentario);
        this.getSonido = () => Sonido;
    }

    get Nombre() {
        return this.getNombre();
    }
    get Edad() {
        return this.getEdad();
    }
    get Img() {
        return this.getImg();
    }
    get Sonido() {
        return this.getSonido();
    }
    set Comentario(comentario) {
        return this.setComentarios(comentario);
    }
}

export default Animal;