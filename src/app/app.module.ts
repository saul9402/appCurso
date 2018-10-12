import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//se importan los componentes usando el nombre que se uso en la clausula export
//del archivo que se pretende importar y se le da la ruta de donde lo va a encontrar
import { AppComponent } from './app.component';
import { FechaactualComponent } from './fechaactual/fechaactual.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ViewmodeloComponent } from './viewmodelo/viewmodelo.component';
import { EjmetodoComponent } from './ejmetodo/ejmetodo.component';
import { EjpropertybindingComponent } from './ejpropertybinding/ejpropertybinding.component';

@NgModule({
  declarations: [
    AppComponent,
    FechaactualComponent,
    CopyrightComponent,
    ViewmodeloComponent,
    EjmetodoComponent,
    EjpropertybindingComponent //se agrega el componente que se importó
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
