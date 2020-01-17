import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsmarchandPage } from './tabsmarchand.page';

describe('TabsmarchandPage', () => {
  let component: TabsmarchandPage;
  let fixture: ComponentFixture<TabsmarchandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsmarchandPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsmarchandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
