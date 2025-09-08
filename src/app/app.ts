import { Component } from '@angular/core';
import { InterpolationComp } from './Component/interpolation-comp/interpolation-comp';
import { CounterAppComponent } from "./Component/counter-app-component/counter-app-component";

@Component({
  selector: 'app-root',
  imports: [InterpolationComp, CounterAppComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my_Practice_Angular';


}
