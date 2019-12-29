import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalHomeComponent } from './cal-home.component';

describe('CalHomeComponent', () => {
  let component: CalHomeComponent;
  let fixture: ComponentFixture<CalHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
