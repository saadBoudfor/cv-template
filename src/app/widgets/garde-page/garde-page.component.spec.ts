import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GardePageComponent } from './garde-page.component';

describe('GardePageComponent', () => {
  let component: GardePageComponent;
  let fixture: ComponentFixture<GardePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GardePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GardePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
