import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeJSCanvaComponent } from './three-jscanva.component';

describe('ThreeJSCanvaComponent', () => {
  let component: ThreeJSCanvaComponent;
  let fixture: ComponentFixture<ThreeJSCanvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeJSCanvaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeJSCanvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
