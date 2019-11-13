import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesmarchandPage } from './desmarchand.page';

describe('DesmarchandPage', () => {
  let component: DesmarchandPage;
  let fixture: ComponentFixture<DesmarchandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesmarchandPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesmarchandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
