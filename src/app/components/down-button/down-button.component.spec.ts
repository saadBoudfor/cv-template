import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownButtonComponent } from './down-button.component';

describe('DownButtonComponent', () => {
  let component: DownButtonComponent;
  let fixture: ComponentFixture<DownButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
