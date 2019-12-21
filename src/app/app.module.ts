import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropdownModule } from './dropdown/dropdown.module';
import { FormsModule } from '@angular/forms';

import { ServicesModule } from './services/services.module';
import { MovimientosModule } from './movimientos/movimientos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DropdownModule,
    FormsModule,
    ServicesModule,
    MovimientosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
