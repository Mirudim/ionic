import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJogadorPage } from './add-jogador.page';

describe('AddJogadorPage', () => {
  let component: AddJogadorPage;
  let fixture: ComponentFixture<AddJogadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJogadorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJogadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
