import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestRaisedComponent } from './request-raised.component';

describe('RequestRaisedComponent', () => {
  let component: RequestRaisedComponent;
  let fixture: ComponentFixture<RequestRaisedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestRaisedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestRaisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
