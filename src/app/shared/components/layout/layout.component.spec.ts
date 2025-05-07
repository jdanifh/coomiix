import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { Event, NavigationEnd, provideRouter, Router } from '@angular/router';
import { routes } from '../../../app.routes';
import { By } from '@angular/platform-browser';
import { BreakpointObserver } from '@angular/cdk/layout';
import { EventEmitter } from '@angular/core';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  let observer: BreakpointObserver;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutComponent],
      providers: [provideRouter(routes)]
    })
    .compileComponents();

    observer = TestBed.inject(BreakpointObserver);
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render App title', () => {
    const title = fixture.debugElement.query(By.css('.title'));
    expect(title.nativeElement.textContent).toBe('App');
  });

  it(`should initialize opened menu`, () => {
    expect(component.closed()).toBe(false);
  })

  it(`should toggle menu`, () => {
    expect(component.closed()).toBe(false);
    const menuButton = fixture.debugElement.query(By.css('.title + button'));
    menuButton.triggerEventHandler('click');
    fixture.detectChanges();
    expect(component.closed()).toBe(true);
  })

  it(`should initialize closed menu for small devices`, () => {
    const spy = jest.spyOn(observer, 'isMatched').mockReturnValue(true);
    const smallFixture = TestBed.createComponent(LayoutComponent);
    const smallComponent = smallFixture.componentInstance;
    smallFixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    expect(smallComponent.closed()).toBe(true);
  })

  it(`should close on navigate for small devices`, () => {
    const spy = jest.spyOn(observer, 'isMatched').mockReturnValue(true);
    const events = new EventEmitter<Event>();
    jest.spyOn(router, 'events', 'get').mockReturnValue(events.asObservable());
    const smallFixture = TestBed.createComponent(LayoutComponent);
    const smallComponent = smallFixture.componentInstance;

    smallFixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    expect(smallComponent.closed()).toBe(true);

    smallComponent.toggleMenu();
    smallFixture.detectChanges();
    expect(smallComponent.closed()).toBe(false);

    events.next(new NavigationEnd(1, '/', '/'))
    smallFixture.detectChanges();
    expect(smallComponent.closed()).toBe(true);

  })

  it(`should match snapshot`, () => {
    expect(fixture.nativeElement.innerHTML).toMatchSnapshot();
  })

});
