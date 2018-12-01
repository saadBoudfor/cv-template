import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionWidgetComponent } from './description-widget.component';

describe('DescriptionWidgetComponent', () => {
  let component: DescriptionWidgetComponent;
  let fixture: ComponentFixture<DescriptionWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
