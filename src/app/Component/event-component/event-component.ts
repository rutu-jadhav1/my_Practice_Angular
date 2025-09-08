import { Component } from '@angular/core';

@Component({
  selector: 'app-event-component',
  imports: [],
  templateUrl: './event-component.html',
  styleUrl: './event-component.css'
})
export class EventComponent {
  handleEvent(event:Event){
    console.log('Function Called:', event.type);
    console.log('value:',(event.target as HTMLInputElement).value);
  }
}
