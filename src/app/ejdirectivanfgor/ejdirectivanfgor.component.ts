import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivanfgor',
  templateUrl: './ejdirectivanfgor.component.html',
  styleUrls: ['./ejdirectivanfgor.component.css']
})
export class EjdirectivanfgorComponent implements OnInit {

  cursos: string[];

  constructor() { 
    this.cursos = ['angular','html', 'css'];
  }

  ngOnInit() {
  }

}
