import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilmarchandPage } from './profilmarchand.page';

describe('ProfilmarchandPage', () => {
  let component: ProfilmarchandPage;
  let fixture: ComponentFixture<ProfilmarchandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilmarchandPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilmarchandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
