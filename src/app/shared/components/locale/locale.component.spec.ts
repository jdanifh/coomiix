import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaleComponent } from './locale.component';
import { DEFAULT_LOCALE, LOCALES, provideLocalesTest } from '../../../core/providers/locale/locale.provider';
import { By } from '@angular/platform-browser';

describe('LocaleComponent', () => {
  let component: LocaleComponent;
  let fixture: ComponentFixture<LocaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocaleComponent],
      providers: [ provideLocalesTest() ]
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
    const localeButton = fixture.debugElement.query(By.css('[mat-icon-button]'));
    localeButton.triggerEventHandler('click');
    fixture.detectChanges();
    const localeList = fixture.debugElement.queryAll(By.css('[mat-menu-item]'));
    expect(localeList.length).toStrictEqual(Object.values(LOCALES).length);
  });

  it('should change current locale', () => {
    expect(component.locale()).toBe(DEFAULT_LOCALE);

    const localeButton = fixture.debugElement.query(By.css('[mat-icon-button]'));
    localeButton.triggerEventHandler('click');
    fixture.detectChanges();
    const localeList = fixture.debugElement.queryAll(By.css('[mat-menu-item]'));
    const locale = localeList[1];
    locale.triggerEventHandler('click');
    fixture.detectChanges();

    expect(component.locale()).toBe(Object.values(LOCALES)[1]);
  });

  it(`should match snapshot`, () => {
    expect(fixture.nativeElement.innerHTML).toMatchSnapshot();
  })

});
