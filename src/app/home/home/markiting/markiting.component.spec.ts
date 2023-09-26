import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkitingComponent } from './markiting.component';

describe('MarkitingComponent', () => {
  let component: MarkitingComponent;
  let fixture: ComponentFixture<MarkitingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarkitingComponent]
    });
    fixture = TestBed.createComponent(MarkitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
