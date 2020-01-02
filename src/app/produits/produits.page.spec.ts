import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsPage } from './produits.page';

describe('ProduitsPage', () => {
  let component: ProduitsPage;
  let fixture: ComponentFixture<ProduitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
