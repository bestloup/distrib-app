import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionstockPage } from './gestionstock.page';

describe('GestionstockPage', () => {
  let component: GestionstockPage;
  let fixture: ComponentFixture<GestionstockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionstockPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionstockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
