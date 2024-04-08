import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviecontainerComponent } from './moviecontainer.component';

describe('MoviecontainerComponent', () => {
  let component: MoviecontainerComponent;
  let fixture: ComponentFixture<MoviecontainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviecontainerComponent]
    });
    fixture = TestBed.createComponent(MoviecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
