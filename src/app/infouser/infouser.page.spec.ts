import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfouserPage } from './infouser.page';

describe('InfouserPage', () => {
  let component: InfouserPage;
  let fixture: ComponentFixture<InfouserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfouserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfouserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
