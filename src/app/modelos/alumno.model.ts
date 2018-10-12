//esto es un modelo de angular 
export class Alumno {

    //se declaran la spropiedades que tendra este objeto
    //modificador de acceso, nombre de la propiedad y el tipo
    public id: number;
    public nombre: string;
    public apellidos: string;
    public ciudad: string;
    //constructor... como en java, xD
constructor(id: number, nombre: string, apellidos: string, ciudad: string){
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.ciudad = ciudad;
    }
}