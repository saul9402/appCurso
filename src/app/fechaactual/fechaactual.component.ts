import {Component} from '@angular/core'; //Se importa el decorador Component

//Se declara el decorador component. Marca una clase como componente de Angular
@Component({
    //aqui se ponen los metadatos que definen este componente
    selector: 'app-fechaactual', //nombre de la etiqueta donde se renderiza el componente
    //templateUrl: './fechaactual.component.html',  //La ruta enla que va aestar la plantila
    //Par el pipe de numeros se pone primero el numero de enteros a mostrar, luego el numeor minimo de 
    //decimales un guión y al final el numero maximo de decimales
    template: //`<p>La cotizacion actual del dólar es de {{ dolareuro | currency: 'EUR': true }}</p>`,
    ` <p>{{ sexo | i18nSelect: encabezamiento}} {{ nombre }}</p> `,
    //uppercase y lowercase sin opciones, es lo unico que hacen
    /*`<p>{{ ciudad | uppercase }}, {{hoy | date: 'd/M/y H:mm'}} </p>
    <app-copyright></app-copyright>`,*/ //si el fragmento de codigo que se pretede usar en el html es muy pequeño se puede sustituir por esto, directamente en el componente. Podrias hasta eliminar el atchivo html. Y se pueden inclir componentes como el <app-copyright></app-copyright> dentro de este mismo
    styleUrls: ['./fechaactual.component.css'] //son lo estilos que se podran aplicar a el template declarado arriba
})

//este nombre será el que se usará para importar el componente en el modulo
export class FechaactualComponent{ //se exporta el componente para que se pueda usar
//aqui dentro va la logica que llevara a cano este componente
   // hoy = new Date(); //esta es lo logica ; se declara una variable llamada 'hoy'

    //ciudad: string = 'Madrid';
    // dolareuro: number = 0.88;
    nombre: string = 'Carlos';
    sexo: string = 'hombre';
    encabezamiento: any = { 'hombre':'Estimado', 'mujer':'Estimada' };
}