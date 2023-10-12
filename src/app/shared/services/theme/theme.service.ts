import {computed, inject, Inject, Injectable, signal} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {THEME} from "../../enums/theme.enum";
import {LocalStorage} from "../storage/local-storage.service";

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  currentTheme = signal(THEME.LIGHT);
  isDarkMode = computed(() => this.currentTheme() === THEME.DARK);

  #localStorage = inject(LocalStorage);


  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  loadThemeConfig() {
    const theme = this.#localStorage.getItem('theme') as THEME ?? THEME.LIGHT;
    this.switchTheme(theme);
  }

  switchTheme(theme?: THEME) {
    this.document.body.classList.remove('light');
    this.document.body.classList.remove('dark');
    if (theme) {
      this.document.body.classList.add(theme);
      this.currentTheme.update(() => theme);
    } else {
      this.currentTheme.update(() => this.isDarkMode() ? THEME.LIGHT : THEME.DARK)
      this.document.body.classList.add(this.currentTheme());
    }
    this.#localStorage.setItem('theme', this.currentTheme());
  }
}
