import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoSugerenciasComponent } from './cuerpo-sugerencias.component';

describe('CuerpoSugerenciasComponent', () => {
  let component: CuerpoSugerenciasComponent;
  let fixture: ComponentFixture<CuerpoSugerenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoSugerenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoSugerenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
