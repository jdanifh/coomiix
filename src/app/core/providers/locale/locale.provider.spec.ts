import { TestBed } from '@angular/core/testing';
import { TranslateLoader, TranslateService } from '@ngx-translate/core';
import { LOCALE_ID } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DEFAULT_LOCALE, provideLocalesTest } from './locale.provider';

describe('LocaleProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [ provideLocalesTest() ]
    });
  });

  it('should provide DEFAULT_LOCALE as LOCALE_ID', () => {
    const localeId = TestBed.inject(LOCALE_ID);
    expect(localeId).toBe(DEFAULT_LOCALE);
  });

  it('should provide DEFAULT_LOCALE as MAT_DATE_LOCALE', () => {
    const matDateLocale = TestBed.inject(MAT_DATE_LOCALE);
    expect(matDateLocale).toBe(DEFAULT_LOCALE);
  });

  it('should provide TranslateService with correct default language', () => {
    const translate = TestBed.inject(TranslateService);
    expect(translate.getDefaultLang()).toBe(DEFAULT_LOCALE);
  });

  it('should configure TranslateLoader correctly', () => {
    const translateLoader = TestBed.inject(TranslateLoader);
    expect(translateLoader).toBeTruthy();
  });

  it('should provide MomentDateAdapter with UTC configuration', () => {
    const options = TestBed.inject(MAT_MOMENT_DATE_ADAPTER_OPTIONS);
    expect(options).toEqual({ useUtc: true });
  });
});
