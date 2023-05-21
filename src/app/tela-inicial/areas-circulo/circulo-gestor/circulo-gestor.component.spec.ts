import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculoGestorComponent } from './circulo-gestor.component';

describe('CirculoGestorComponent', () => {
  let component: CirculoGestorComponent;
  let fixture: ComponentFixture<CirculoGestorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CirculoGestorComponent]
    });
    fixture = TestBed.createComponent(CirculoGestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
