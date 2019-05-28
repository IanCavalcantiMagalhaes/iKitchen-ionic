import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdmintradorPage } from './login-admintrador.page';

describe('LoginAdmintradorPage', () => {
  let component: LoginAdmintradorPage;
  let fixture: ComponentFixture<LoginAdmintradorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAdmintradorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAdmintradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
