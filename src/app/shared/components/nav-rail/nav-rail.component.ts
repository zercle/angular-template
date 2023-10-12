import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { ThemeSwitcherComponent } from "../theme-switcher/theme-switcher.component";
import { MatDrawer } from "@angular/material/sidenav";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Menu } from "../../models/menu.model";
import { AuthService } from "../../../core/auth/auth.service";

@Component({
    selector: 'app-nav-rail',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        ThemeSwitcherComponent,
        MatDividerModule,
        MatExpansionModule,
        MatListModule,
        RouterLinkActive,
        RouterLink
    ],
    templateUrl: './nav-rail.component.html',
    styleUrls: ['./nav-rail.component.scss'],
})
export class NavRailComponent {

    @Input() drawer!: MatDrawer;
    @Input() menus: Menu[] = [];

}
