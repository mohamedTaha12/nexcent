import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessReinventComponent } from './business-reinvent.component';

describe('BusinessReinventComponent', () => {
  let component: BusinessReinventComponent;
  let fixture: ComponentFixture<BusinessReinventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessReinventComponent]
    });
    fixture = TestBed.createComponent(BusinessReinventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
