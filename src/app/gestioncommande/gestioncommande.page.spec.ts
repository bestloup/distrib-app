import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncommandePage } from './gestioncommande.page';

describe('GestioncommandePage', () => {
  let component: GestioncommandePage;
  let fixture: ComponentFixture<GestioncommandePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioncommandePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioncommandePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
