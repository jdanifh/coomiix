import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsComponent } from './breadcrumbs.component';
import { By } from '@angular/platform-browser';
import { BreadcrumbsService } from './breadcrumbs.service';
import { provideRouter } from '@angular/router';
import { routes } from '../../../app.routes';
import { provideLocalesTest } from '../../../core/providers/locale/locale.provider';

describe('BreadcrumbsComponent', () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;
  let service: BreadcrumbsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbsComponent],
      providers: [
        provideRouter(routes),
        provideLocalesTest()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(BreadcrumbsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render breadcrumbs', () => {
    const breadcrumb = {title: 'Home', path: ''};
    service.addBreadcrumb(breadcrumb);
    fixture.detectChanges();
    let last = fixture.debugElement.query(By.css('h2'));
    expect(last.nativeElement.textContent).toContain(breadcrumb.title);

    const breadcrumb2 = {title: 'Dashboard', path: '/dashboard'};
    service.addBreadcrumb(breadcrumb2);
    fixture.detectChanges();
    last = fixture.debugElement.query(By.css('h2'));
    expect(last.nativeElement.textContent).toContain(breadcrumb2.title);
    const notLast = fixture.debugElement.query(By.css('h3'));
    expect(notLast.nativeElement.textContent).toContain(breadcrumb.title);
  })

  it(`should match snapshot`, () => {
    expect(fixture.nativeElement.innerHTML).toMatchSnapshot();
  })

});
