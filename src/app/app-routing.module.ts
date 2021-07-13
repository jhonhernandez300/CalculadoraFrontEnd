import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresarservicioComponent } from './ingresarservicio/ingresarservicio.component';
import { VerhorasComponent } from './verhoras/verhoras.component';
import { SeeOrdersSalesComponent } from './see-orders-sales/see-orders-sales.component';
import { SeePercentageComponent } from './see-percentage/see-percentage.component';
import { SeeFrequencyComponent } from './see-frequency/see-frequency.component';

const routes: Routes = [
  { path: 'seeSalesOrders', component: SeeOrdersSalesComponent },
  { path: 'seePercentage', component: SeePercentageComponent },
  { path: 'seeFrequency', component: SeeFrequencyComponent },
  { path: 'ingresarservicio', component: IngresarservicioComponent },
  { path: 'verhoras', component: VerhorasComponent },
  { path: '', component: SeeOrdersSalesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
