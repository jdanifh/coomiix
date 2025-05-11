import { ApplicationConfig, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withDebugTracing, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { provideLocales } from './core/providers/locale/locale.provider';

import { routes } from './app.routes';

// Zone.js is disabled in favor of zoneless change detection
export const appConfig: ApplicationConfig = {
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline', floatLabel: 'always'}},
    provideExperimentalZonelessChangeDetection(),
    provideAnimationsAsync(),
    provideRouter(routes, withDebugTracing(), withViewTransitions(), withInMemoryScrolling()),
    provideHttpClient(withInterceptors([])),
    provideLocales(),
  ]
};
