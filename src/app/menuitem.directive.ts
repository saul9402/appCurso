import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMenuitem]'
})
export class MenuitemDirective {

  //crea un enlace de una propiedad en el html con una propiedad en esta clase
  @HostBinding('class.itemOrange') private mostrar: boolean = false;

  //Enlaza un evento del html a un metodo
  @HostListener('mouseover') onOver(){
    this.mostrar = true;
  }

  @HostListener('mouseout') onOut(){
    this.mostrar = false;
  }

}
