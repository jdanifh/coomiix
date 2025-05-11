import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { LocaleService } from './locale.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cmx-locale',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
  templateUrl: './locale.component.html',
  styleUrl: './locale.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocaleComponent {

  private _service = inject(LocaleService);

  public locale = this._service.locale;
  public locales = this._service.locales;

  public changeLocale(locale: string) {
    this._service.changeLocale(locale);
  }

}
