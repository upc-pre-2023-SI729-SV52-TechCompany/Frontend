import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractCardComponent } from './contract-card.component';

describe('ContractCardComponent', () => {
  let component: ContractCardComponent;
  let fixture: ComponentFixture<ContractCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContractCardComponent]
    });
    fixture = TestBed.createComponent(ContractCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
