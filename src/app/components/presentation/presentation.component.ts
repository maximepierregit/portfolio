import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {
  @Input() text: string[] = [];
  textToShow: string = '';
  
constructor() {
 
 }


 }
