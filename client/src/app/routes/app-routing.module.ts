import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../components/app/app.component';
import { SalonsListComponent } from '../components/salons-list/salons-list.component';
import { SalonSingleComponent } from '../components/salon-single/salon-single.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'salons', pathMatch: 'full' },
  { path: 'salons', component: SalonsListComponent },
  { path: 'salons/:identityname', component: SalonSingleComponent },
  { path: '**', redirectTo: 'salons' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
