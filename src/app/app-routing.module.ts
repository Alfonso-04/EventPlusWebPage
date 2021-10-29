import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlquilerComponent } from './paginas/alquiler/alquiler.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { IndexComponent } from './paginas/index/index.component';
import { SalonesComponent } from './paginas/salones/salones.component';
import { SugerenciasComponent } from './paginas/sugerencias/sugerencias.component';

const routes: Routes = [
  {path:'index',component:IndexComponent},
  {path:'salones',component:SalonesComponent},
  {path:'alquiler',component:AlquilerComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'sugerencias',component:SugerenciasComponent},
  {path:'',redirectTo:'/index',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
