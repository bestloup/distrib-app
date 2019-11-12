import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchandsPage } from './marchands.page';

describe('MarchandsPage', () => {
  let component: MarchandsPage;
  let fixture: ComponentFixture<MarchandsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarchandsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarchandsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
