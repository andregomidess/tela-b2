import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasCirculoComponent } from './areas-circulo.component';

describe('AreasCirculoComponent', () => {
  let component: AreasCirculoComponent;
  let fixture: ComponentFixture<AreasCirculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreasCirculoComponent]
    });
    fixture = TestBed.createComponent(AreasCirculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
