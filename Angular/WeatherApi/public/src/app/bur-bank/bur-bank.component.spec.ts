import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurBankComponent } from './bur-bank.component';

describe('BurBankComponent', () => {
  let component: BurBankComponent;
  let fixture: ComponentFixture<BurBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
