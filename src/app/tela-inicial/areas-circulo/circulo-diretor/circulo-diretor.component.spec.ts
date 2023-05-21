import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculoDiretorComponent } from './circulo-diretor.component';

describe('CirculoDiretorComponent', () => {
  let component: CirculoDiretorComponent;
  let fixture: ComponentFixture<CirculoDiretorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CirculoDiretorComponent]
    });
    fixture = TestBed.createComponent(CirculoDiretorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
