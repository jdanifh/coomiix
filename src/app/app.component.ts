import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from "./shared/components/layout/layout.component";
import { SideMenuComponent } from "./shared/components/side-menu/side-menu.component";
import { LocaleComponent } from "./shared/components/locale/locale.component";
import { BreadcrumbsComponent } from "./shared/components/breadcrumbs/breadcrumbs.component";

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    LayoutComponent,
    SideMenuComponent,
    LocaleComponent,
    BreadcrumbsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = 'Coomiix';
}
