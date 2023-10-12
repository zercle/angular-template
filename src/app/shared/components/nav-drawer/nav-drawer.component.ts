import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../../models/menu.model';
import { LogoComponent } from "../logo/logo.component";
import { MatListModule } from "@angular/material/list";
import { NgForOf, NgIf, TitleCasePipe } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatChipsModule } from "@angular/material/chips";

@Component({
    selector: 'app-nav-drawer',
    standalone: true,
    imports: [
        LogoComponent,
        MatListModule,
        NgForOf,
        NgIf,
        TitleCasePipe,
        RouterLink,
        RouterLinkActive,
        MatIconModule,
        MatExpansionModule,
        MatChipsModule
    ],
    templateUrl: './nav-drawer.component.html',
    styleUrls: ['./nav-drawer.component.scss'],
})
export class NavDrawerComponent implements OnInit {
    @Input() menus: Menu[] = [];

    constructor() {
    }

    ngOnInit(): void {
    }

}
