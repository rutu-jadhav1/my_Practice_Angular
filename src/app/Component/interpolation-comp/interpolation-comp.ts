import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-comp',
  imports: [],
  templateUrl: './interpolation-comp.html',
  styleUrl: './interpolation-comp.css'
})
export class InterpolationComp {
  
  x=5;
  y=10;

  handleClickEvent(){
    alert("function called !");
    this.otherFunction();
  }

  otherFunction(){
    console.log("other function called");
  }
}
