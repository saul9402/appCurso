import {Component} from '@angular/core'; //Se importa el decorador Component

//Se declara el decorador component. Marca una clase como componente de Angular
@Component({
    //aqui se ponen los metadatos que definen este componente
    selector: 'app-fechaactual', //nombre de la etiqueta donde se renderiza el componente
    templateUrl: './fechaactual.component.html',  //La ruta enla que va aestar la plantila
    styleUrls: ['./fechaactual.component.css'] //son lo estilos que se podran aplicar a el template declarado arriba
})

//este nombre será el que se usará para importar el componente en el modulo
export class FechaactualComponent{ //se exporta el componente para que se pueda usar
//aqui dentro va la logica que llevara a cano este componente
    hoy = new Date(); //esta es lo logica ; se declara una variable llamada 'hoy'
}