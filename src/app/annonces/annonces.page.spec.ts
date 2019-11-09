import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncesPage } from './annonces.page';

describe('AnnoncesPage', () => {
  let component: AnnoncesPage;
  let fixture: ComponentFixture<AnnoncesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnoncesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnoncesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
