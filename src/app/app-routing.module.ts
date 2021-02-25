import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresarservicioComponent } from './ingresarservicio/ingresarservicio.component';
import { VerhorasComponent } from './verhoras/verhoras.component';


const routes: Routes = [
  { path: 'ingresarservicio', component: IngresarservicioComponent },
  { path: 'verhoras', component: VerhorasComponent },
  { path: '', component: IngresarservicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
