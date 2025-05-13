import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuComponent } from './side-menu.component';
import { provideRouter } from '@angular/router';
import { routes } from '../../../app.routes';
import { By } from '@angular/platform-browser';
import { provideLocalesTest } from '../../../core/providers/locale/locale.provider';

describe('SideMenuComponent', () => {
  let component: SideMenuComponent;
  let fixture: ComponentFixture<SideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideMenuComponent],
      providers: [
        provideRouter(routes),
        provideLocalesTest(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Home button', () => {
    const home = fixture.debugElement.children[0].query(By.css('mat-icon'));
    expect(home.nativeElement.textContent).toBe('home');
  });

  it(`should match snapshot`, () => {
    expect(fixture.nativeElement.innerHTML).toMatchSnapshot();
  })

});
