import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaleComponent } from './locale.component';
import { DEFAULT_LOCALE, LOCALES, provideLocales } from '../../../core/providers/locale/locale.provider';
import { HttpBackend } from '@angular/common/http';

describe('LocaleComponent', () => {
  let component: LocaleComponent;
  let fixture: ComponentFixture<LocaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocaleComponent],
      providers: [
        provideLocales(),
        { provide: HttpBackend, useClass: HttpBackend },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render DEFAULT_LOCALE', () => {
    expect(component.locale()).toBe(DEFAULT_LOCALE);
  });

  it('should render locale list', () => {
    expect(component.locales).toStrictEqual(Object.values(LOCALES));
  });

  it('should change current locale', () => {
    expect(component.locale()).toBe(DEFAULT_LOCALE);
    component.changeLocale(LOCALES.ES);
    expect(component.locale()).toBe(LOCALES.ES);
  });

  it(`should match snapshot`, () => {
    expect(fixture.nativeElement.innerHTML).toMatchSnapshot();
  })

});
