import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';

//se importan los componentes usando el nombre que se uso en la clausula export
//del archivo que se pretende importar y se le da la ruta de donde lo va a encontrar
import { AppComponent } from './app.component';
import { FechaactualComponent } from './fechaactual/fechaactual.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ViewmodeloComponent } from './viewmodelo/viewmodelo.component';
import { EjmetodoComponent } from './ejmetodo/ejmetodo.component';
import { EjpropertybindingComponent } from './ejpropertybinding/ejpropertybinding.component';
import { EjeventbindingComponent } from './ejeventbinding/ejeventbinding.component';
import { Ej2waybindingComponent } from './ej2waybinding/ej2waybinding.component';
import { EjdirectivangifComponent } from './ejdirectivangif/ejdirectivangif.component';
import { EjdirectivangstyleComponent } from './ejdirectivangstyle/ejdirectivangstyle.component';
import { EjdirectivangclassComponent } from './ejdirectivangclass/ejdirectivangclass.component';
import { EjdirectivanfgorComponent } from './ejdirectivanfgor/ejdirectivanfgor.component';
import { EjarrayobjetosComponent } from './ejarrayobjetos/ejarrayobjetos.component';
import { EjdirectivangswitchComponent } from './ejdirectivangswitch/ejdirectivangswitch.component';
import { MenuitemDirective } from './menuitem.directive';
import { EjmidirectivaComponent } from './ejmidirectiva/ejmidirectiva.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { EuroPipe } from './euro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FechaactualComponent,
    CopyrightComponent,
    ViewmodeloComponent,
    EjmetodoComponent,
    EjpropertybindingComponent,
    EjeventbindingComponent,
    Ej2waybindingComponent,
    EjdirectivangifComponent,
    EjdirectivangstyleComponent,
    EjdirectivangclassComponent,
    EjdirectivanfgorComponent,
    EjarrayobjetosComponent,
    EjdirectivangswitchComponent,
    MenuitemDirective,
    EjmidirectivaComponent,
    PadreComponent,
    HijoComponent,
    EuroPipe //se agrega el componente que se importó
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
