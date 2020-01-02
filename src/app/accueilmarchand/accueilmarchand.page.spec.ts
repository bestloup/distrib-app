import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilmarchandPage } from './accueilmarchand.page';

describe('AccueilmarchandPage', () => {
  let component: AccueilmarchandPage;
  let fixture: ComponentFixture<AccueilmarchandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilmarchandPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilmarchandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
