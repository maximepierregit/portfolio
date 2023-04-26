import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  @ViewChild('mouse-tracker') mouseTracker: any;

  constructor() { }

  ngAfterViewInit() {

    this.mouseTracker.nativeElement.addEventListener('mousemove', (event: any) => {
      this.mouseTracker.nativeElement.style.setProperty('--mouse-x', event.clientX + 'px');
      this.mouseTracker.nativeElement.style.setProperty('--mouse-y', event.clientY + 'px');
    });

  }




}
