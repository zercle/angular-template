import { booleanAttribute, Component, inject, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatToolbarModule } from "@angular/material/toolbar";
import { SearchComponent } from "../search/search.component";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { AuthService } from "../../../core/auth/auth.service";
import { DOCUMENT, NgIf } from "@angular/common";
import { UiService } from "../../services/ui/ui.service";
import { LogoComponent } from "../logo/logo.component";
import { ThemeSwitcherComponent } from "../theme-switcher/theme-switcher.component";
import { MatFormFieldModule } from "@angular/material/form-field";

@Component({
    standalone: true,
    selector: 'app-top-bar',
    imports: [
        MatToolbarModule,
        SearchComponent,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        NgIf,
        LogoComponent,
        RouterLink,
        ThemeSwitcherComponent,
        MatFormFieldModule
    ],
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {

    appHasUpdate = inject(UiService).appHasUpdate;
    public navbarTitle = 'kku dms v4';
    @Input({transform: booleanAttribute}) hideAppLogo = false;
    @Input({transform: booleanAttribute}) showSearchBar = false;
    @Input({transform: booleanAttribute}) showThemeSwitcher = false;
    #router = inject(Router);
    #auth = inject(AuthService);
    user = this.#auth.user;
    #document = inject(DOCUMENT);

    constructor() {
    }

    ngOnInit(): void {

    }

    reloadApp() {
        this.#document.location.reload();
    }

    signIn() {
        this.#auth.signInWithKKUAccount();
    }

    signOut() {
        this.#auth.signOut();
    }
}
