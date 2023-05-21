import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculoGestaoFinanceiraComponent } from './circulo-gestao-financeira.component';

describe('CirculoGestaoFinanceiraComponent', () => {
  let component: CirculoGestaoFinanceiraComponent;
  let fixture: ComponentFixture<CirculoGestaoFinanceiraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CirculoGestaoFinanceiraComponent]
    });
    fixture = TestBed.createComponent(CirculoGestaoFinanceiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
