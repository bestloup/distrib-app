import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfcommandePage } from './confcommande.page';

describe('ConfcommandePage', () => {
  let component: ConfcommandePage;
  let fixture: ComponentFixture<ConfcommandePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfcommandePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfcommandePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
