import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJogadorPage } from './list-jogador.page';

describe('ListJogadorPage', () => {
  let component: ListJogadorPage;
  let fixture: ComponentFixture<ListJogadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListJogadorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJogadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
