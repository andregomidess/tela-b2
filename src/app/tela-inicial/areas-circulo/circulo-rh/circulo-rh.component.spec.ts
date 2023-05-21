import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculoRhComponent } from './circulo-rh.component';

describe('CirculoRhComponent', () => {
  let component: CirculoRhComponent;
  let fixture: ComponentFixture<CirculoRhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CirculoRhComponent]
    });
    fixture = TestBed.createComponent(CirculoRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
