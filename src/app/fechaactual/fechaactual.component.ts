import {Component} from '@angular/core'; //Se importa el decorador Component

//Se declara el decorador component. Marca una clase como componente de Angular
@Component({
    //aqui se ponen los metadatos que definen este componente
    selector: 'app-fechaactual', //nombre de la etiqueta donde se renderiza el componente
    //templateUrl: './fechaactual.component.html',  //La ruta enla que va aestar la plantila
    template: `<p>Madrid, España, {{hoy | date: 'd/M/y H:mm'}} </p>
    <app-copyright></app-copyright>`, //si el fragmento de codigo que se pretede usar en el html es muy pequeño se puede sustituir por esto, directamente en el componente. Podrias hasta eliminar el atchivo html. Y se pueden inclir componentes como el <app-copyright></app-copyright> dentro de este mismo
    styleUrls: ['./fechaactual.component.css'] //son lo estilos que se podran aplicar a el template declarado arriba
})

//este nombre será el que se usará para importar el componente en el modulo
export class FechaactualComponent{ //se exporta el componente para que se pueda usar
//aqui dentro va la logica que llevara a cano este componente
    hoy = new Date(); //esta es lo logica ; se declara una variable llamada 'hoy'
}