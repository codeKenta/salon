import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './routes/app-routing.module';
import { HttpModule } from '@angular/http';

import { DataService } from './services/data.service';

import { AppComponent } from './components/app/app.component';
import { SalonsListComponent } from './components/salons-list/salons-list.component';
import { SalonSingleComponent } from './components/salon-single/salon-single.component';
import { FilterComponent } from './components/icons/filter/filter.component';
import { AngleLeftComponent } from './components/icons/angle-left/angle-left.component';
import { AngleDownSmComponent } from './components/icons/angle-down-sm/angle-down-sm.component';
import { StarComponent } from './components/icons/star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    SalonsListComponent,
    SalonSingleComponent,
    FilterComponent,
    AngleLeftComponent,
    AngleDownSmComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
