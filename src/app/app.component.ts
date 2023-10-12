import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from "./shared/services/theme/theme.service";
import { AuthService } from "./core/auth/auth.service";
import { UiService } from "./shared/services/ui/ui.service";
import { MatIconRegistry } from "@angular/material/icon";
import { SwUpdate, VersionReadyEvent } from "@angular/service-worker";
import { filter } from "rxjs/operators";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-template';
  #themeService = inject(ThemeService);
  #auth = inject(AuthService);
  #ui = inject(UiService);
  #iconRegistry = inject(MatIconRegistry);
  #swUpdate = inject(SwUpdate);

  constructor() {
    this.#themeService.loadThemeConfig();
    this.#auth.loadAccessToken();
    this.#iconRegistry.setDefaultFontSetClass('material-symbols-outlined');
    this.#swUpdate.versionUpdates
      .pipe(filter((evt): evt is VersionReadyEvent => evt.type === "VERSION_READY"))
      .subscribe(evt => {
        this.#ui.appHasUpdate.set(true);
      });
  }
}
