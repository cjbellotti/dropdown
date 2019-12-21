import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovimientoItemComponent } from './movimiento-item/movimiento-item.component';
import { DropdownModule } from '../dropdown/dropdown.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MovimientoItemComponent],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule
  ],
  exports : [MovimientoItemComponent]
})
export class MovimientosModule { }
