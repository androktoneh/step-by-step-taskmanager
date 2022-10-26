import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarListasComponent } from './gerenciar-listas.component';

describe('GerenciarListasComponent', () => {
  let component: GerenciarListasComponent;
  let fixture: ComponentFixture<GerenciarListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarListasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
