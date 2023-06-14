import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalProgressBarsComponent } from './vertical-progress-bars.component';

describe('VerticalProgressBarsComponent', () => {
  let component: VerticalProgressBarsComponent;
  let fixture: ComponentFixture<VerticalProgressBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalProgressBarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalProgressBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
