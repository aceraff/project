import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPagePage } from './upload-page.page';

describe('UploadPagePage', () => {
  let component: UploadPagePage;
  let fixture: ComponentFixture<UploadPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
