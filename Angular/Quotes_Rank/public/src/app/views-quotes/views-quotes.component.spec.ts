import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsQuotesComponent } from './views-quotes.component';

describe('ViewsQuotesComponent', () => {
  let component: ViewsQuotesComponent;
  let fixture: ComponentFixture<ViewsQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
