import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresarsrevicioComponent } from './ingresarservicio/ingresarsrevicio.component';
import { VerhorasComponent } from './verhoras/verhoras.component';


const routes: Routes = [
  { path: 'ingresarservicio', component: IngresarsrevicioComponent },
  { path: 'verhoras', component: VerhorasComponent },
  { path: '', component: IngresarsrevicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
