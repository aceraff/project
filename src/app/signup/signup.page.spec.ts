import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { signUpDetailsPage } from './signup.page';

describe('SignupPage', () => {
  let component: signUpDetailsPage;
  let fixture: ComponentFixture<signUpDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ signUpDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(signUpDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
