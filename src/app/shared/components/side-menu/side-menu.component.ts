import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'cmx-side-menu',
  imports: [
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    TranslateModule,
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideMenuComponent {

}
