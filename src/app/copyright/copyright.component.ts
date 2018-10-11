import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent implements OnInit {

  //esto es typescript
  //antes de cualquier metodo se deben crear las propiedades
  copyright: string = 'ACME S.A';
  hoy: any = new Date();


  constructor() { }

  ngOnInit() {
  }

}
