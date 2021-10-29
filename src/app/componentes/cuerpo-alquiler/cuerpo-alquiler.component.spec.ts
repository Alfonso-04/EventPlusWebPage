import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoAlquilerComponent } from './cuerpo-alquiler.component';

describe('CuerpoAlquilerComponent', () => {
  let component: CuerpoAlquilerComponent;
  let fixture: ComponentFixture<CuerpoAlquilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoAlquilerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoAlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
