import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ThreeJSCanvaComponent } from './components/three-jscanva/three-jscanva.component';
import { ThreePageComponent } from './pages/three-page/three-page.component';
import { MouseTrackerComponent } from './components/mouse-tracker/mouse-tracker.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    PresentationComponent,
    ThreeJSCanvaComponent,
    ThreePageComponent,
    MouseTrackerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
