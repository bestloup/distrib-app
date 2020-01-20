import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationcommandePage } from './creationcommande.page';

describe('CreationcommandePage', () => {
  let component: CreationcommandePage;
  let fixture: ComponentFixture<CreationcommandePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationcommandePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationcommandePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
