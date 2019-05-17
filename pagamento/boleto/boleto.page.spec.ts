import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletoPage } from './boleto.page';

describe('BoletoPage', () => {
  let component: BoletoPage;
  let fixture: ComponentFixture<BoletoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoletoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
