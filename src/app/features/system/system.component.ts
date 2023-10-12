import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MINI_SIDENAV_MENU, SIDEBAR_SYSTEM_MENU } from "../../core/data/menus.data";
import {
  MainLayoutComponent
} from "../../shared/layouts/main-layout/main-layout.component";

@Component({
  selector: 'app-system',
  standalone: true,
  imports: [CommonModule, MainLayoutComponent],
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent {
  protected readonly mini_sidenav_menus = MINI_SIDENAV_MENU;
  protected readonly menus = SIDEBAR_SYSTEM_MENU;
}
