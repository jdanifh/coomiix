import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRouteSnapshot, ActivationEnd, ActivationStart, Router, UrlSegment } from '@angular/router';
import { filter } from 'rxjs';

export interface Breadcrumb {
  title: string,
  path: string,
}

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {

  private _router = inject(Router);

  private _breadcrumbs : WritableSignal<Breadcrumb[]> = signal([]);
  public get breadcrumbs() {
    return this._breadcrumbs.asReadonly();
  }

  constructor() {
    this._router.events.pipe(
      takeUntilDestroyed(),
      filter(event => event instanceof ActivationStart),
    ).subscribe(() => this.reset());

    this._router.events.pipe(
      takeUntilDestroyed(),
      filter(event => event instanceof ActivationEnd),
    ).subscribe(event => this._addRouterBreadcrumb(event));
  }

  private _addRouterBreadcrumb(event: ActivationEnd) {
    if (event.snapshot.title) {
      const title = event.snapshot.title;
      const breadcrumb = {title: title, path: this._getPath(event.snapshot.pathFromRoot)};
      this._breadcrumbs.update(value => [breadcrumb, ...value]);
    }
  }

  private _getPath(route: ActivatedRouteSnapshot[]) {
    return route.reduce((acc, current) => acc + this._getUrl(current.url), '');
  }
  private _getUrl(path: UrlSegment[]) {
    return path.reduce((acc, current) => acc + '/' + current.toString(), '');
  }

  public addBreadcrumb(breadcrumb: Breadcrumb) {
    this._breadcrumbs.update(value => [...value, breadcrumb]);
  }

  public removeBreadcrumb() {
    this._breadcrumbs.update(value => value.slice(0, value.length -1));
  }

  public setBreadcrumbs(breadcrumbs: Breadcrumb[]) {
    this._breadcrumbs.set(breadcrumbs);
  }

  public reset() {
    this._breadcrumbs.set([]);
  }
}
