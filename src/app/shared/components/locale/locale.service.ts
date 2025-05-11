import { inject, Injectable, signal } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { TranslateService } from '@ngx-translate/core';
import { DEFAULT_LOCALE, LOCALES } from '../../../core/providers/locale/locale.provider';

export const LOCALE_KEY = 'LOCALE_ID';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  private _locale = signal<string>(DEFAULT_LOCALE);
  private _adapter = inject(DateAdapter);
  private _service = inject(TranslateService);

  constructor() {
    this._service.addLangs(Object.values(LOCALES));
    const savedLocale = localStorage.getItem(LOCALE_KEY);
    if (savedLocale) {
      this.changeLocale(savedLocale);
    } else {
      this.changeLocale(DEFAULT_LOCALE);
    }
  }

  public get locale() {
    return this._locale.asReadonly();
  }

  public get locales() {
    return this._service.getLangs();
  }

  public changeLocale(locale: string) {
    this._locale.set(locale);
    this._service.use(locale);
    this._adapter.setLocale(locale);
    localStorage.setItem(LOCALE_KEY, locale);
  }
}
