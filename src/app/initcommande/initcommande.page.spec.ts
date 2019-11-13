import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitcommandePage } from './initcommande.page';

describe('InitcommandePage', () => {
  let component: InitcommandePage;
  let fixture: ComponentFixture<InitcommandePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitcommandePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitcommandePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
