import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationproduitPage } from './creationproduit.page';

describe('CreationproduitPage', () => {
  let component: CreationproduitPage;
  let fixture: ComponentFixture<CreationproduitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationproduitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationproduitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
