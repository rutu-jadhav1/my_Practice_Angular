import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-comp',
  imports: [],
  templateUrl: './interpolation-comp.html',
  styleUrl: './interpolation-comp.css'
})
export class InterpolationComp {
  name:String="Ruhi";
  contactNo:String|number=1245785963;
  other:any=true;

  x=5;
  y=10;

  handleClickEvent(){
    alert("function called !");
    this.otherFunction();
  }

  otherFunction(){
    console.log("other function called");
  }

  updateData(){
    this.name='Ruchika';
    this.contactNo='India';
    this.other='Hello there!';
    this.other=401;

    let a:number = 20;
    alert("variable declared in function = "+a);
  }

}
