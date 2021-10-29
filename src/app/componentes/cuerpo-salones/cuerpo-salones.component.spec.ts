import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoSalonesComponent } from './cuerpo-salones.component';

describe('CuerpoSalonesComponent', () => {
  let component: CuerpoSalonesComponent;
  let fixture: ComponentFixture<CuerpoSalonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoSalonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoSalonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
