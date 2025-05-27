import { TestBed } from '@angular/core/testing';

import { BreadcrumbsService } from './breadcrumbs.service';
import { provideLocalesTest } from '../../../core/providers/locale/locale.provider';
import { provideRouter, Router, Routes } from '@angular/router';

describe('BreadcrumbsService', () => {
  let router: Router;
  let service: BreadcrumbsService;
  const testRoutes: Routes = [
    { path: 'dashboard', title: 'Dashboard', children: [
      { path: 'state', title: 'State', loadComponent: jest.fn()}
    ]},
    { path: '**', title: 'Home', loadComponent: jest.fn()}
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideRouter(testRoutes),
        provideLocalesTest()
      ]
    });
    router = TestBed.inject(Router);
    service = TestBed.inject(BreadcrumbsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add breadcrumb', () => {
    expect(service.breadcrumbs()).toStrictEqual([]);
    const breadcrumb = {title: 'Home', path: ''};
    service.addBreadcrumb(breadcrumb);
    expect(service.breadcrumbs()).toStrictEqual([breadcrumb]);
    const breadcrumb2 = {title: 'Dashboard', path: '/dashboard'};
    service.addBreadcrumb(breadcrumb2);
    expect(service.breadcrumbs()).toStrictEqual([breadcrumb, breadcrumb2]);
  });

  it('should remove breadcrumb', () => {
    expect(service.breadcrumbs()).toStrictEqual([]);
    const breadcrumb = {title: 'Home', path: ''};
    service.addBreadcrumb(breadcrumb);
    expect(service.breadcrumbs()).toStrictEqual([breadcrumb]);
    const breadcrumb2 = {title: 'Dashboard', path: '/dashboard'};
    service.addBreadcrumb(breadcrumb2);
    expect(service.breadcrumbs()).toStrictEqual([breadcrumb, breadcrumb2]);
    service.removeBreadcrumb();
    expect(service.breadcrumbs()).toStrictEqual([breadcrumb]);
    service.removeBreadcrumb();
    expect(service.breadcrumbs()).toStrictEqual([]);
  });

  it('should set a list of breadcrumbs', () => {
    expect(service.breadcrumbs()).toStrictEqual([]);
    const breadcrumb = {title: 'Home', path: ''};
    const breadcrumb2 = {title: 'Dashboard', path: '/dashboard'};
    service.setBreadcrumbs([breadcrumb, breadcrumb2]);
    expect(service.breadcrumbs()).toStrictEqual([breadcrumb, breadcrumb2]);
  });

  it('should reset breadcrumbs', () => {
    expect(service.breadcrumbs()).toStrictEqual([]);
    const breadcrumb = {title: 'Home', path: ''};
    const breadcrumb2 = {title: 'Dashboard', path: '/dashboard'};
    service.setBreadcrumbs([breadcrumb, breadcrumb2]);
    expect(service.breadcrumbs()).toStrictEqual([breadcrumb, breadcrumb2]);
    service.reset();
    expect(service.breadcrumbs()).toStrictEqual([]);
  });

  it(`should add breadcrumbs from router events`, async () => {
    expect(service.breadcrumbs()).toStrictEqual([]);
    router.navigate(['/']);
    await Promise.resolve();
    expect(service.breadcrumbs()).toStrictEqual([{title: 'Home', path: ''}]);
  })

  it(`should add breadcrumb child from router events`, async () => {
    const breadcrumb = {title: 'Dashboard', path: '/dashboard'};
    const breadcrumb2 = {title: 'State', path: '/dashboard/state'};
    expect(service.breadcrumbs()).toStrictEqual([]);
    await Promise.resolve();
    router.navigate(['dashboard', 'state']);
    await Promise.resolve();
    expect(service.breadcrumbs()).toStrictEqual([breadcrumb, breadcrumb2]);
  })

});
