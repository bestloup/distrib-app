import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairebddPage } from './formulairebdd.page';

describe('FormulairebddPage', () => {
  let component: FormulairebddPage;
  let fixture: ComponentFixture<FormulairebddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulairebddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairebddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
