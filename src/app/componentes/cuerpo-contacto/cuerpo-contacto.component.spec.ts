import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoContactoComponent } from './cuerpo-contacto.component';

describe('CuerpoContactoComponent', () => {
  let component: CuerpoContactoComponent;
  let fixture: ComponentFixture<CuerpoContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
