import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiComponent } from './audi.component';

describe('AudiComponent', () => {
  let component: AudiComponent;
  let fixture: ComponentFixture<AudiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudiComponent]
    });
    fixture = TestBed.createComponent(AudiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
