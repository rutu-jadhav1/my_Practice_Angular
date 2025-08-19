import { Component } from '@angular/core';
import { InterpolationComp } from './Component/interpolation-comp/interpolation-comp';

@Component({
  selector: 'app-root',
  imports: [InterpolationComp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my_Practice_Angular';


}
