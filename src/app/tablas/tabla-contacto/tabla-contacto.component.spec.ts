import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaContactoComponent } from './tabla-contacto.component';

describe('TablaContactoComponent', () => {
  let component: TablaContactoComponent;
  let fixture: ComponentFixture<TablaContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
