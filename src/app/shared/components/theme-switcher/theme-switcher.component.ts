import { Component, inject } from '@angular/core';
import { ThemeService } from "../../services/theme/theme.service";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@Component({
    selector: 'app-theme-switcher',
    standalone: true,
    imports: [
        MatIconModule,
        MatButtonModule
    ],
    templateUrl: './theme-switcher.component.html',
    styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent {
    isDarkMode: boolean = false;
    #themeService = inject(ThemeService);

    constructor() {
    }

    switchTheme() {
        this.#themeService.switchTheme();
        this.isDarkMode = this.#themeService.isDarkMode();
    }

}
