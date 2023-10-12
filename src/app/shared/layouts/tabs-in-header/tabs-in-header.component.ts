import { booleanAttribute, Component, inject, Input, OnInit } from '@angular/core';
import { Menu } from '../../models/menu.model';
import { MatTabsModule } from "@angular/material/tabs";
import { NgForOf, NgIf } from "@angular/common";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { UiService } from "../../services/ui/ui.service";

@Component({
    selector: 'app-tabs-in-header',
    standalone: true,
    imports: [
        MatTabsModule,
        NgForOf,
        RouterLink,
        RouterLinkActive,
        MatIconModule,
        RouterOutlet,
        NgIf,
        MatButtonModule
    ],
    templateUrl: './tabs-in-header.component.html',
    styleUrls: ['./tabs-in-header.component.scss'],
})
export class TabsInHeaderComponent implements OnInit {

    @Input({transform: booleanAttribute}) showBackButton = false;
    @Input({transform: booleanAttribute}) noData = false;

    @Input() backwardLocation: string = '../';

    @Input() pageTitle?: string;

    @Input() tabLinks: Menu[] = [];
    isLoading = inject(UiService).isLoading;

    constructor() {
    }

    ngOnInit(): void {
    }

}
