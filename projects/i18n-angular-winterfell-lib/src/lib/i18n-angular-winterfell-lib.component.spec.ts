import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nAngularWinterfellLibComponent } from './i18n-angular-winterfell-lib.component';

describe('I18nAngularWinterfellLibComponent', () => {
  let component: I18nAngularWinterfellLibComponent;
  let fixture: ComponentFixture<I18nAngularWinterfellLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I18nAngularWinterfellLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I18nAngularWinterfellLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
