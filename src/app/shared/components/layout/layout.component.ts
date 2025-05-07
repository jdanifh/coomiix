import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver } from '@angular/cdk/layout';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'cmx-layout',
  imports: [
    RouterModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {

  public title = input('App');
  public closed = signal(false);

  private _observer = inject(BreakpointObserver);
  private _router = inject(Router);

  constructor() {
    if (this._observer.isMatched('(width < 960px)')) {
      this.closed.set(true);
      this._router.events.pipe(
        takeUntilDestroyed(),
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => this.closed.set(true));
    }
  }

  public toggleMenu() {
    this.closed.update(value => !value);
  }

}
