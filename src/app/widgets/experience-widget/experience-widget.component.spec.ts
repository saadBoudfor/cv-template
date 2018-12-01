import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceWidgetComponent } from './experience-widget.component';

describe('ExperienceWidgetComponent', () => {
  let component: ExperienceWidgetComponent;
  let fixture: ComponentFixture<ExperienceWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
