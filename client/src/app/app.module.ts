import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { SalonsListComponent } from './components/salons-list/salons-list.component';
import { SalonSingleComponent } from './components/salon-single/salon-single.component';
import { FilterComponent } from './components/icons/filter/filter.component';
import { AngleLeftComponent } from './components/icons/angle-left/angle-left.component';
import { AngleDownSmComponent } from './components/icons/angle-down-sm/angle-down-sm.component';

@NgModule({
  declarations: [
    AppComponent,
    SalonsListComponent,
    SalonSingleComponent,
    FilterComponent,
    AngleLeftComponent,
    AngleDownSmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
