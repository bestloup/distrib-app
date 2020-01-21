import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MappersoPage } from './mapperso.page';

describe('MappersoPage', () => {
  let component: MappersoPage;
  let fixture: ComponentFixture<MappersoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MappersoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MappersoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
