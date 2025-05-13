import { TestBed } from '@angular/core/testing';

import { LocaleService } from './locale.service';
import { DEFAULT_LOCALE, LOCALES, provideLocalesTest } from '../../../core/providers/locale/locale.provider';

describe('LocaleService', () => {
  let service: LocaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [ provideLocalesTest() ]
    });
    service = TestBed.inject(LocaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should provide DEFAULT_LOCALE', () => {
    expect(service.locale()).toBe(DEFAULT_LOCALE);
  });

  it('should provide locale list', () => {
    expect(service.locales).toStrictEqual(Object.values(LOCALES));
  });

  it('should change current locale', () => {
    expect(service.locale()).toBe(DEFAULT_LOCALE);
    service.changeLocale(LOCALES.ES);
    expect(service.locale()).toBe(LOCALES.ES);
  });
});
