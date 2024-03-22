import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiatComponent } from './fiat.component';

describe('FiatComponent', () => {
  let component: FiatComponent;
  let fixture: ComponentFixture<FiatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiatComponent]
    });
    fixture = TestBed.createComponent(FiatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
