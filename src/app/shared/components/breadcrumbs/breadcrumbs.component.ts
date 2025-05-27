import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbsService } from './breadcrumbs.service';

@Component({
  selector: 'cmx-breadcrumbs',
  imports: [
    RouterModule,
    TranslateModule
  ],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent {

  private _service = inject(BreadcrumbsService);
  public breadcrumbs = this._service.breadcrumbs;

}
