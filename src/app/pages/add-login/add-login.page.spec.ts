import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLoginPage } from './add-login.page';

describe('AddLoginPage', () => {
  let component: AddLoginPage;
  let fixture: ComponentFixture<AddLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
