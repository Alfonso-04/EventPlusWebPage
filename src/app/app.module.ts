import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PieComponent } from './componentes/pie/pie.component';
import { CuerpoIndexComponent } from './componentes/cuerpo-index/cuerpo-index.component';
import { CuerpoSalonesComponent } from './componentes/cuerpo-salones/cuerpo-salones.component';

import { CuerpoContactoComponent } from './componentes/cuerpo-contacto/cuerpo-contacto.component';
import { IndexComponent } from './paginas/index/index.component';
import { SalonesComponent } from './paginas/salones/salones.component';

import { ContactoComponent } from './paginas/contacto/contacto.component';
import { CuerpoAlquilerComponent } from './componentes/cuerpo-alquiler/cuerpo-alquiler.component';
import { AlquilerComponent } from './paginas/alquiler/alquiler.component';
import { CuerpoSugerenciasComponent } from './componentes/cuerpo-sugerencias/cuerpo-sugerencias.component';
import { SugerenciasComponent } from './paginas/sugerencias/sugerencias.component';
import { Form1Component } from './formularios/form1/form1.component';
import { Form2Component } from './formularios/form2/form2.component';
import { Form3Component } from './formularios/form3/form3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaContactoComponent } from './tablas/tabla-contacto/tabla-contacto.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    MenuComponent,
    PieComponent,
    CuerpoIndexComponent,
    CuerpoSalonesComponent,
    CuerpoContactoComponent,
    IndexComponent,
    SalonesComponent,
    ContactoComponent,
    CuerpoAlquilerComponent,
    AlquilerComponent,
    CuerpoSugerenciasComponent,
    SugerenciasComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    TablaContactoComponent,
    routingComponents
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
