import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyDetailsSpecificComponent } from './society-details-specific.component';

describe('SocietyDetailsSpecificComponent', () => {
  let component: SocietyDetailsSpecificComponent;
  let fixture: ComponentFixture<SocietyDetailsSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocietyDetailsSpecificComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocietyDetailsSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
