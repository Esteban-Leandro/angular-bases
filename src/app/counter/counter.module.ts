import { CounterComponent } from './components/counter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CounterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CounterComponent,
  ],
})
export class CounterModule { }
