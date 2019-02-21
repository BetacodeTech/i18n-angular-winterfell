import { TestBed } from '@angular/core/testing';

import { I18nAngularWinterfellLibService } from './i18n-angular-winterfell-lib.service';

describe('I18nAngularWinterfellLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: I18nAngularWinterfellLibService = TestBed.get(I18nAngularWinterfellLibService);
    expect(service).toBeTruthy();
  });
});
