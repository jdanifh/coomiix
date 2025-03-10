import { importProvidersFrom, LOCALE_ID } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, provideMomentDateAdapter } from '@angular/material-moment-adapter';
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { registerLocaleData } from '@angular/common';

// ES Locale
import 'moment/locale/es';
import es from '@angular/common/locales/es';
registerLocaleData(es);

export const DEFAULT_LOCALE = 'es-ES';

export const provideLocales = () => {
  return [
    {provide: LOCALE_ID, useValue: DEFAULT_LOCALE},
    {provide: MAT_DATE_LOCALE, useValue: DEFAULT_LOCALE},
    provideMomentDateAdapter(MAT_MOMENT_DATE_FORMATS, {useUtc: true}),
    importProvidersFrom([TranslateModule.forRoot({
      defaultLanguage: DEFAULT_LOCALE,
      loader: {
        provide: TranslateLoader,
        deps: [HttpBackend],
        useFactory: (http: HttpBackend) => new TranslateHttpLoader(new HttpClient(http), './i18n/', '.json'),
      },
    })])
  ]
};
