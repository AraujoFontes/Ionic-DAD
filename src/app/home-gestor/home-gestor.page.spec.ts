import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGestorPage } from './home-gestor.page';

describe('HomeGestorPage', () => {
  let component: HomeGestorPage;
  let fixture: ComponentFixture<HomeGestorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeGestorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGestorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
