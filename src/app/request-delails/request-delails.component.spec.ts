import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDelailsComponent } from './request-delails.component';

describe('RequestDelailsComponent', () => {
  let component: RequestDelailsComponent;
  let fixture: ComponentFixture<RequestDelailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestDelailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDelailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
