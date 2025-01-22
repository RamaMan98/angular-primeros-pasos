import { NgModule } from "@angular/core";
import { CounterConponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    CounterConponent
  ],
  exports: [
    CounterConponent
  ]
})
export class CounterModule {}
