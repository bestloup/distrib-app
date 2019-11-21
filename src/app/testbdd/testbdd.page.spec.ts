import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbddPage } from './testbdd.page';

describe('TestbddPage', () => {
  let component: TestbddPage;
  let fixture: ComponentFixture<TestbddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestbddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestbddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
